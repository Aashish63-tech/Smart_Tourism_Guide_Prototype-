export type TravelInterest =
  | 'Nature'
  | 'Beaches'
  | 'Historical Places'
  | 'Religious Places'
  | 'Food and Culture'
  | 'Adventure'
  | 'Shopping'
  | 'Family Activities';

export type TravelService =
  | 'Tourist attractions'
  | 'Hotels and accommodation'
  | 'Restaurants and local food'
  | 'Transportation and fare guidance'
  | 'Weather information'
  | 'GPS navigation'
  | 'Voice translation'
  | 'Emergency assistance';

export interface TripPreferences {
  destination: string;
  durationDays: number;
  totalBudget: number;
  travellerCount: number;
  interests: TravelInterest[];
  services: TravelService[];
  additionalPreferences?: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  timeSlot: 'Morning' | 'Afternoon' | 'Evening';
  description: string;
  category: string;
  entryFee: number;
  durationHours: number;
  rating: number;
  location: string;
  mapQuery: string;
}

export interface DayItinerary {
  dayNumber: number;
  theme: string;
  highlight: string;
  activities: AttractionItem[];
  suggestedMeal: {
    meal: 'Lunch' | 'Dinner';
    dish: string;
    place: string;
    estimatedCost: number;
  };
  transitNote: string;
  dayBudget: number;
}

export interface HotelRecommendation {
  id: string;
  name: string;
  tier: 'Budget' | 'Mid-range' | 'Luxury';
  pricePerNight: number;
  rating: number;
  location: string;
  amenities: string[];
  description: string;
  image: string;
}

export interface RestaurantRecommendation {
  id: string;
  name: string;
  cuisine: string;
  specialty: string;
  avgCostForTwo: number;
  rating: number;
  location: string;
  ambiance: string;
  image: string;
}

export interface TransportOption {
  id: string;
  mode: string;
  description: string;
  estimatedCost: number;
  suitability: string;
  durationTip: string;
}

export interface WeatherInfo {
  tempCelsius: number;
  condition: string;
  iconName: string;
  humidityPercent: number;
  bestSeason: string;
  advisory: string;
  clothingTip: string;
}

export interface ExpenseBreakdown {
  transportation: number;
  food: number;
  attractions: number;
  accommodation: number;
  total: number;
}

export interface GeneratedItinerary {
  id: string;
  referenceId: string;
  destination: string;
  durationDays: number;
  travellerCount: number;
  allocatedBudget: number;
  createdAt: string;
  days: DayItinerary[];
  hotels: HotelRecommendation[];
  restaurants: RestaurantRecommendation[];
  transportOptions: TransportOption[];
  weather: WeatherInfo;
  expenseBreakdown: ExpenseBreakdown;
  selectedServices: TravelService[];
  selectedInterests: TravelInterest[];
  userNotes?: string;
  isOverBudget: boolean;
  budgetDifference: number; // positive if over, negative if under
}

export interface SavedTrip extends GeneratedItinerary {
  savedAt: string;
  title: string;
}

export interface DestinationInfo {
  id: string;
  name: string;
  state: string;
  tagline: string;
  description: string;
  image: string;
  category: 'Metro' | 'Beaches' | 'Heritage' | 'Nature & Backwaters' | 'Hill Station';
  recommendedDays: number;
  typicalDailyBudget: number;
  popularAttractions: string[];
  knownFor: string[];
  weatherBrief: string;
  emergencyHospital: string;
  touristPolicePhone: string;
}

export interface TranslationPhrase {
  id: string;
  category: 'Greetings' | 'Directions' | 'Food & Dining' | 'Shopping' | 'Emergency';
  english: string;
  hindi: string;
  hindiScript: string;
  pronunciation: string;
}

export interface EmergencyContact {
  title: string;
  number: string;
  description: string;
  available: string;
  icon: string;
  isPrimary?: boolean;
}
