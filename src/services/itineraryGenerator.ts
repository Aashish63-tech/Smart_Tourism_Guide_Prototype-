import {
  TripPreferences,
  GeneratedItinerary,
  DayItinerary,
  AttractionItem,
  ExpenseBreakdown,
  HotelRecommendation,
  RestaurantRecommendation,
  TransportOption,
  WeatherInfo
} from '../types';
import {
  DESTINATION_ATTRACTIONS,
  HOTELS_CATALOG,
  RESTAURANTS_CATALOG,
  WEATHER_CATALOG,
  POPULAR_DESTINATIONS
} from '../data/destinationsData';

export function generateTripItinerary(prefs: TripPreferences): GeneratedItinerary {
  const destKey = (prefs.destination || 'mumbai').toLowerCase().trim();
  const pool = DESTINATION_ATTRACTIONS[destKey] || DESTINATION_ATTRACTIONS['mumbai'];
  const hotelsPool: HotelRecommendation[] = HOTELS_CATALOG[destKey] || HOTELS_CATALOG['mumbai'];
  const restPool: RestaurantRecommendation[] = RESTAURANTS_CATALOG[destKey] || RESTAURANTS_CATALOG['mumbai'];
  const weatherData: WeatherInfo = WEATHER_CATALOG[destKey] || WEATHER_CATALOG['mumbai'];

  const daysCount = Math.min(Math.max(prefs.durationDays || 3, 1), 14);
  const travellers = Math.max(prefs.travellerCount || 1, 1);

  // Filter or prioritize attractions matching user interests
  const userInterests = prefs.interests || [];
  const prioritizedAttractions = [...pool].sort((a, b) => {
    const aMatch = a.suitableInterests.some(i => userInterests.includes(i as any));
    const bMatch = b.suitableInterests.some(i => userInterests.includes(i as any));
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return b.rating - a.rating;
  });

  const dayThemes = [
    { theme: 'Iconic Landmarks & Heritage Discovery', mealDish: 'Signature Local Thali & Heritage Dining' },
    { theme: 'Cultural Wonders, Bazaars & Sunset Views', mealDish: 'Local Street Delicacies & Coastal Specials' },
    { theme: 'Nature, Ocean Trails & Coastal Charm', mealDish: 'Seafood Platter or Regional Vegetarian Specialties' },
    { theme: 'Artisan Quarters, Crafts & Hidden Gems', mealDish: 'Traditional Sweets & Clay Oven Bread' },
    { theme: 'Scenic Excursions & Scenic Horizons', mealDish: 'Authentic Village Cafe Cuisine' },
    { theme: 'Spiritual Shrines & Peaceful Sanctuaries', mealDish: 'Pure Vegetarian Temple Feast' },
    { theme: 'Culinary Masterclasses & Tasting Trail', mealDish: 'Multi-Course Regional Banquet' },
    { theme: 'Vintage Architecture & Colonial Strolls', mealDish: 'Heritage Irani/Boutique Cafe' },
    { theme: 'Adventure Treks & Hilltop Fortresses', mealDish: 'High-Altitude Dhaba Warm Meal' },
    { theme: 'Leisurely Mornings & Beachside Retreat', mealDish: 'Fresh Coconut Water & Beach Shack Grills' },
    { theme: 'Textiles, Spices & Local Souvenir Shopping', mealDish: 'Royal Rajasthani/Mughlai Special' },
    { theme: 'Wildlife Sanctuaries & Eco-Forest Reserves', mealDish: 'Homestyle Farm-to-Table Lunch' },
    { theme: 'Photography Walk & Golden Hour Vistas', mealDish: 'Rooftop Panoramic Dining' },
    { theme: 'Farewell Memories & Relaxed Retrospective', mealDish: 'Grand Celebratory Dinner' }
  ];

  const days: DayItinerary[] = [];
  let totalAttractionFeesPerPerson = 0;

  for (let d = 1; d <= daysCount; d++) {
    const themeInfo = dayThemes[(d - 1) % dayThemes.length];
    
    // Pick 2-3 activities for morning, afternoon, evening
    const baseIdx = ((d - 1) * 2) % prioritizedAttractions.length;
    const a1 = prioritizedAttractions[baseIdx];
    const a2 = prioritizedAttractions[(baseIdx + 1) % prioritizedAttractions.length];

    const activities: AttractionItem[] = [
      {
        id: `act-${d}-1`,
        name: a1.name,
        timeSlot: 'Morning',
        description: a1.description,
        category: a1.category,
        entryFee: a1.entryFee,
        durationHours: a1.durationHours,
        rating: a1.rating,
        location: a1.location,
        mapQuery: `${a1.name}, ${prefs.destination}`
      },
      {
        id: `act-${d}-2`,
        name: a2.name,
        timeSlot: 'Afternoon',
        description: a2.description,
        category: a2.category,
        entryFee: a2.entryFee,
        durationHours: a2.durationHours,
        rating: a2.rating,
        location: a2.location,
        mapQuery: `${a2.name}, ${prefs.destination}`
      }
    ];

    // If day is odd and we have extra attractions, add an evening stroll
    if (d % 2 === 1 && prioritizedAttractions.length > 2) {
      const a3 = prioritizedAttractions[(baseIdx + 2) % prioritizedAttractions.length];
      activities.push({
        id: `act-${d}-3`,
        name: `${a3.name} (Evening Stroll)`,
        timeSlot: 'Evening',
        description: `Unwind with sunset views or relaxed evening leisure at ${a3.name}.`,
        category: a3.category,
        entryFee: 0,
        durationHours: 1.5,
        rating: a3.rating,
        location: a3.location,
        mapQuery: `${a3.name}, ${prefs.destination}`
      });
    }

    const dayAttractionFees = activities.reduce((sum, act) => sum + act.entryFee, 0);
    totalAttractionFeesPerPerson += dayAttractionFees;

    const rest = restPool[(d - 1) % restPool.length];
    const mealCostEst = Math.round(rest.avgCostForTwo / 2);

    days.push({
      dayNumber: d,
      theme: themeInfo.theme,
      highlight: `${activities[0].name} & ${activities[1].name}`,
      activities,
      suggestedMeal: {
        meal: d % 2 === 1 ? 'Lunch' : 'Dinner',
        dish: `${themeInfo.mealDish} at ${rest.name}`,
        place: rest.location,
        estimatedCost: mealCostEst * travellers
      },
      transitNote: `Recommended transit: Local Metro or Prepaid Cab (${Math.round(20 + d * 5)} mins average transfer)`,
      dayBudget: Math.round((dayAttractionFees + mealCostEst + 300) * travellers)
    });
  }

  // Cost estimations based on duration & travellers
  // 1. Transportation: Avg ₹400 per person per day for local cabs/metro
  const transportPerDayPerson = 450;
  const transportation = Math.round(transportPerDayPerson * daysCount * travellers);

  // 2. Food: Avg ₹650 per person per day (breakfast, lunch, dinner, street snacks)
  const foodPerDayPerson = 700;
  const food = Math.round(foodPerDayPerson * daysCount * travellers);

  // 3. Attractions: Total entry fees + permits
  const attractions = Math.max(Math.round(totalAttractionFeesPerPerson * travellers), 200 * daysCount * travellers);

  // 4. Accommodation: Nights = daysCount - 1 (min 1). Rooms = ceil(travellers / 2).
  const nights = Math.max(daysCount - 1, 1);
  const rooms = Math.ceil(travellers / 2);
  // Pick mid-range hotel price as baseline
  const selectedHotel = hotelsPool[1] || hotelsPool[0];
  const hotelNightlyRate = selectedHotel ? selectedHotel.pricePerNight : 2800;
  const accommodation = Math.round(hotelNightlyRate * nights * rooms);

  // STRICT REQUIREMENT: Total must match sum of displayed categories
  const total = transportation + food + attractions + accommodation;

  const expenseBreakdown: ExpenseBreakdown = {
    transportation,
    food,
    attractions,
    accommodation,
    total
  };

  const isOverBudget = total > prefs.totalBudget;
  const budgetDifference = total - prefs.totalBudget;

  // Generate unique demo reference ID
  const cityCode = destKey.substring(0, 3).toUpperCase();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const referenceId = `STG-${cityCode}-${randomSuffix}`;

  // Transport options customized for this destination
  const transportOptions: TransportOption[] = [
    {
      id: 'tr-1',
      mode: 'City Metro & Rapid Transit',
      description: 'Fast, air-conditioned transit avoiding road congestion.',
      estimatedCost: Math.round(60 * daysCount * travellers),
      suitability: 'High traffic urban sightseeing',
      durationTip: 'Trains run every 4-8 minutes'
    },
    {
      id: 'tr-2',
      mode: 'App Cabs / Prepaid Taxis',
      description: 'Doorstep AC sedans or hatchbacks with GPS tracking.',
      estimatedCost: Math.round(400 * daysCount * travellers),
      suitability: 'Luggage transfers, airport & evening returns',
      durationTip: 'Available on-demand via apps or airport booths'
    },
    {
      id: 'tr-3',
      mode: 'Auto-Rickshaw / E-Rickshaw',
      description: 'Quick open-air 3-wheeler for short distance bazaar hopping.',
      estimatedCost: Math.round(150 * daysCount * travellers),
      suitability: 'Historic alleys, local shopping and heritage gates',
      durationTip: 'Check meter or negotiate upfront'
    }
  ];

  return {
    id: `trip-${Date.now()}`,
    referenceId,
    destination: prefs.destination,
    durationDays: daysCount,
    travellerCount: travellers,
    allocatedBudget: prefs.totalBudget,
    createdAt: new Date().toISOString(),
    days,
    hotels: hotelsPool,
    restaurants: restPool,
    transportOptions,
    weather: weatherData,
    expenseBreakdown,
    selectedServices: prefs.services || [],
    selectedInterests: prefs.interests || [],
    userNotes: prefs.additionalPreferences || '',
    isOverBudget,
    budgetDifference
  };
}
