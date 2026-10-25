import { DestinationInfo } from '../types';

export const POPULAR_DESTINATIONS: DestinationInfo[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'The City of Dreams & Coastal Heritage',
    description: 'A bustling coastal metropolis famous for colonial architecture, Bollywood, street food, Marine Drive sunsets, and the iconic Gateway of India.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
    category: 'Metro',
    recommendedDays: 3,
    typicalDailyBudget: 3500,
    popularAttractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Maharaj Terminus', 'Colaba Causeway', 'Juhu Beach'],
    knownFor: ['Vada Pav & Street Food', 'Colonial Art Deco', 'Bollywood Studios', 'Arabian Sea Sunsets'],
    weatherBrief: 'Warm & humid coastal climate. Pleasant sea breeze during winter (Nov-Feb).',
    emergencyHospital: 'KEM Hospital (Parel) / Lilavati Hospital (Bandra)',
    touristPolicePhone: '022-22620826'
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    tagline: 'Sun, Sand, Portuguese Culture & Vibrant Seas',
    description: 'India’s premier beach haven offering Portuguese heritage churches, golden sands, spice plantations, water sports, and beachside shacks.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    category: 'Beaches',
    recommendedDays: 4,
    typicalDailyBudget: 3000,
    popularAttractions: ['Baga Beach', 'Fort Aguada', 'Basilica of Bom Jesus', 'Dudhsagar Waterfalls', 'Anjuna Flea Market', 'Chapora Fort'],
    knownFor: ['Goan Fish Curry', 'Water Sports', 'Portuguese Baroque Architecture', 'Sunset Cruises'],
    weatherBrief: 'Tropical warm climate with heavy monsoon (Jun-Sep) and breezy winter (Nov-Feb).',
    emergencyHospital: 'Goa Medical College (Bambolim)',
    touristPolicePhone: '0832-2419440'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'The Royal Pink City & Desert Splendor',
    description: 'A UNESCO World Heritage royal city adorned with grand hilltop forts, pink terracotta palaces, vibrant bazaars, and opulent royal cuisine.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    category: 'Heritage',
    recommendedDays: 3,
    typicalDailyBudget: 2800,
    popularAttractions: ['Hawa Mahal', 'Amer Fort', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort', 'Johari Bazaar'],
    knownFor: ['Dal Baati Churma', 'Block Print Textiles', 'Gemstone Jewelry', 'Royal Forts'],
    weatherBrief: 'Semi-arid climate. Warm summers, crisp chilly winters (ideal visit: Oct-Mar).',
    emergencyHospital: 'SMS Medical Hospital (JLN Marg)',
    touristPolicePhone: '0141-2601919'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    tagline: 'God’s Own Country — Backwaters & Serenity',
    description: 'A lush tropical paradise characterized by palm-fringed backwaters, tranquil houseboats, tea-carpeted hills in Munnar, and Ayurvedic wellness.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    category: 'Nature & Backwaters',
    recommendedDays: 5,
    typicalDailyBudget: 3200,
    popularAttractions: ['Alleppey Houseboat Backwaters', 'Munnar Tea Plantations', 'Fort Kochi Chinese Nets', 'Periyar Wildlife Sanctuary', 'Varkala Cliff Beach'],
    knownFor: ['Ayurvedic Spas', 'Appam & Stew', 'Houseboat Cruises', 'Kathakali Dance'],
    weatherBrief: 'Pleasant tropical maritime climate. Lush green year-round, ideal Nov-March.',
    emergencyHospital: 'Ernakulam General Hospital (Kochi)',
    touristPolicePhone: '0484-2215640'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'National Capital Territory',
    tagline: 'Centuries of Empires, Culture & Grand Monuments',
    description: 'India’s historic capital combining Mughal masterpieces, British colonial grandeur, modern metro transit, and renowned North Indian culinary delights.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80',
    category: 'Heritage',
    recommendedDays: 3,
    typicalDailyBudget: 3000,
    popularAttractions: ['Red Fort', 'Qutub Minar', 'India Gate', 'Humayun’s Tomb', 'Lotus Temple', 'Chandni Chowk'],
    knownFor: ['Butter Chicken & Chole Bhature', 'Mughal Architecture', 'Craft Bazaars (Dilli Haat)', 'World Class Metro'],
    weatherBrief: 'Continental climate. Hot summers, pleasant spring/autumn, foggy winter (Dec-Jan).',
    emergencyHospital: 'AIIMS New Delhi (Ansari Nagar)',
    touristPolicePhone: '011-23361231'
  }
];

export interface DestinationAttractionPool {
  name: string;
  category: string;
  description: string;
  entryFee: number;
  durationHours: number;
  rating: number;
  location: string;
  suitableInterests: string[];
}

export const DESTINATION_ATTRACTIONS: Record<string, DestinationAttractionPool[]> = {
  mumbai: [
    {
      name: 'Gateway of India & Apollo Bunder',
      category: 'Historical Places',
      description: 'Iconic 26-metre basalt arch facing Mumbai Harbour, erected to commemorate King George V’s 1911 visit.',
      entryFee: 0,
      durationHours: 2,
      rating: 4.8,
      location: 'Colaba, South Mumbai',
      suitableInterests: ['Historical Places', 'Family Activities', 'Food and Culture']
    },
    {
      name: 'Elephanta Caves Ferry & Rock Cut Temples',
      category: 'Religious Places',
      description: 'UNESCO World Heritage rock-cut cave temples dedicated to Lord Shiva dating back to the 5th-6th centuries.',
      entryFee: 40,
      durationHours: 3.5,
      rating: 4.7,
      location: 'Elephanta Island (Ferry from Gateway)',
      suitableInterests: ['Historical Places', 'Religious Places', 'Adventure']
    },
    {
      name: 'Marine Drive & Chowpatty Sunset Stroll',
      category: 'Beaches',
      description: 'Famous 3.6-km coastal boulevard dubbed "The Queen’s Necklace", perfect for evening sea breeze and street snacks.',
      entryFee: 0,
      durationHours: 2,
      rating: 4.9,
      location: 'Marine Lines to Nariman Point',
      suitableInterests: ['Beaches', 'Food and Culture', 'Family Activities']
    },
    {
      name: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS)',
      category: 'Historical Places',
      description: 'Premier art and history museum housed in grand Indo-Saracenic architecture with 50,000+ artifacts.',
      entryFee: 150,
      durationHours: 2.5,
      rating: 4.7,
      location: 'Fort, Mumbai',
      suitableInterests: ['Historical Places', 'Food and Culture', 'Family Activities']
    },
    {
      name: 'Colaba Causeway Cultural & Street Shopping',
      category: 'Shopping',
      description: 'Vibrant pedestrian market for brass artifacts, silver jewelry, clothes, and heritage cafes like Cafe Leopold.',
      entryFee: 0,
      durationHours: 2,
      rating: 4.5,
      location: 'Colaba, South Mumbai',
      suitableInterests: ['Shopping', 'Food and Culture']
    },
    {
      name: 'Sanjay Gandhi National Park & Kanheri Caves',
      category: 'Nature',
      description: 'Rare protected forest within city limits featuring ancient Buddhist rock-cut caves, cycling trails, and lush greenery.',
      entryFee: 85,
      durationHours: 4,
      rating: 4.6,
      location: 'Borivali East',
      suitableInterests: ['Nature', 'Adventure', 'Historical Places']
    },
    {
      name: 'Siddhi Vinayak Temple & Prabhadevi Walk',
      category: 'Religious Places',
      description: 'Renowned Hindu temple dedicated to Lord Ganesha, attracting millions of devotees and featuring sacred gold-plated inner sanctum.',
      entryFee: 0,
      durationHours: 1.5,
      rating: 4.8,
      location: 'Prabhadevi, Dadar',
      suitableInterests: ['Religious Places', 'Food and Culture']
    },
    {
      name: 'Bandra Bandstand, Carter Road & Castella de Aguada',
      category: 'Beaches',
      description: 'Scenic seaside promenade with views of the Bandra-Worli Sea Link and the historic Portuguese fort ruins.',
      entryFee: 0,
      durationHours: 2,
      rating: 4.6,
      location: 'Bandra West',
      suitableInterests: ['Beaches', 'Food and Culture', 'Nature']
    }
  ],
  goa: [
    {
      name: 'Fort Aguada & 17th-Century Lighthouse',
      category: 'Historical Places',
      description: 'Well-preserved Portuguese fortress overlooking the confluence of Mandovi River and Arabian Sea.',
      entryFee: 50,
      durationHours: 2,
      rating: 4.7,
      location: 'Sinquerim, North Goa',
      suitableInterests: ['Historical Places', 'Beaches', 'Family Activities']
    },
    {
      name: 'Basilica of Bom Jesus & Se Cathedral',
      category: 'Religious Places',
      description: 'UNESCO World Heritage baroque church containing the sacred mortal remains of St. Francis Xavier.',
      entryFee: 0,
      durationHours: 2,
      rating: 4.8,
      location: 'Old Goa',
      suitableInterests: ['Historical Places', 'Religious Places', 'Food and Culture']
    },
    {
      name: 'Calangute & Baga Beach Water Sports',
      category: 'Beaches',
      description: 'Golden sands with parasailing, jet-skiing, dolphin tours, and lively beach shacks with seafood.',
      entryFee: 0,
      durationHours: 3.5,
      rating: 4.6,
      location: 'North Goa',
      suitableInterests: ['Beaches', 'Adventure', 'Family Activities']
    },
    {
      name: 'Dudhsagar Waterfalls & Jungle Jeep Safari',
      category: 'Nature',
      description: 'Four-tiered sea of milk cascade falling from 310 metres amidst dense Western Ghats jungle.',
      entryFee: 100,
      durationHours: 5,
      rating: 4.8,
      location: 'Sonaulim, South Goa Border',
      suitableInterests: ['Nature', 'Adventure']
    },
    {
      name: 'Fontainhas Latin Quarter Heritage Walk',
      category: 'Food and Culture',
      description: 'Vibrant old Portuguese neighbourhood of Panaji featuring brightly painted terracotta-roofed heritage villas and bakeries.',
      entryFee: 0,
      durationHours: 2,
      rating: 4.7,
      location: 'Panaji, Central Goa',
      suitableInterests: ['Food and Culture', 'Historical Places', 'Shopping']
    },
    {
      name: 'Anjuna & Vagator Flea Market & Sunset Cliffs',
      category: 'Shopping',
      description: 'Bohemian open-air market with handmade crafts, spices, live acoustic music, and dramatic red cliff beach views.',
      entryFee: 0,
      durationHours: 3,
      rating: 4.5,
      location: 'Anjuna, North Goa',
      suitableInterests: ['Shopping', 'Beaches', 'Food and Culture']
    },
    {
      name: 'Sahakari Spice Farm Tour & Traditional Goan Buffet',
      category: 'Nature',
      description: 'Guided tour among vanilla, cardamom, and cinnamon plantations followed by authentic banana leaf lunch.',
      entryFee: 500,
      durationHours: 3,
      rating: 4.6,
      location: 'Ponda, South Goa',
      suitableInterests: ['Nature', 'Food and Culture', 'Family Activities']
    }
  ],
  jaipur: [
    {
      name: 'Hawa Mahal (Palace of Winds)',
      category: 'Historical Places',
      description: 'Iconic five-storey pink sandstone facade with 953 honeycomb jharokhas built for royal women to observe street processions.',
      entryFee: 50,
      durationHours: 1.5,
      rating: 4.8,
      location: 'Badi Choupad, Old City',
      suitableInterests: ['Historical Places', 'Food and Culture', 'Family Activities']
    },
    {
      name: 'Amer Fort & Maota Lake View',
      category: 'Historical Places',
      description: 'Spectacular hilltop fortress featuring Sheesh Mahal (mirror palace), Mughal gardens, and ornate marble gateways.',
      entryFee: 100,
      durationHours: 3.5,
      rating: 4.9,
      location: 'Amer, 11km north of Jaipur',
      suitableInterests: ['Historical Places', 'Adventure', 'Family Activities']
    },
    {
      name: 'City Palace Complex & Mubarak Mahal',
      category: 'Food and Culture',
      description: 'Current royal residence showcasing ceremonial costumes, royal carriages, courtyards, and Peacock Gate.',
      entryFee: 200,
      durationHours: 2.5,
      rating: 4.7,
      location: 'City Centre, Jaipur',
      suitableInterests: ['Historical Places', 'Food and Culture']
    },
    {
      name: 'Jantar Mantar Astronomical Observatory',
      category: 'Historical Places',
      description: 'UNESCO World Heritage 18th-century observatory featuring the world’s largest stone sundial and astronomical instruments.',
      entryFee: 50,
      durationHours: 1.5,
      rating: 4.7,
      location: 'Near City Palace',
      suitableInterests: ['Historical Places', 'Family Activities']
    },
    {
      name: 'Nahargarh Fort & Padao Sunset Point',
      category: 'Adventure',
      description: 'Hilltop ramparts standing on the edge of the Aravalli Hills with panoramic aerial views of the glowing Pink City below.',
      entryFee: 50,
      durationHours: 2.5,
      rating: 4.8,
      location: 'Aravalli Hills',
      suitableInterests: ['Adventure', 'Nature', 'Historical Places']
    },
    {
      name: 'Johari & Bapu Bazaar Artisan Walk',
      category: 'Shopping',
      description: 'Bustling traditional bazaars famous for Jaipuri quilts, mojari leather shoes, blue pottery, and bandhani textiles.',
      entryFee: 0,
      durationHours: 2.5,
      rating: 4.6,
      location: 'Pink City Walled Area',
      suitableInterests: ['Shopping', 'Food and Culture']
    },
    {
      name: 'Govind Dev Ji & Birla Mandir',
      category: 'Religious Places',
      description: 'Serene white marble Lakshmi Narayan temple at the base of Moti Dungri hill, illuminated magically at dusk.',
      entryFee: 0,
      durationHours: 1.5,
      rating: 4.7,
      location: 'Tilak Nagar, Jaipur',
      suitableInterests: ['Religious Places', 'Family Activities']
    }
  ],
  kerala: [
    {
      name: 'Alleppey (Alappuzha) Backwater Houseboat Cruise',
      category: 'Nature',
      description: 'Glide along tranquil palm-shaded canals on traditional Kettuvallam houseboats, observing village life and paddy fields.',
      entryFee: 1200,
      durationHours: 4,
      rating: 4.9,
      location: 'Alleppey Punnamada Jetty',
      suitableInterests: ['Nature', 'Food and Culture', 'Family Activities']
    },
    {
      name: 'Munnar Tea Gardens & Mattupetty Dam',
      category: 'Nature',
      description: 'Lush green undulating tea carpet landscapes, misty viewpoints, and boat rides amidst cool Western Ghats mountains.',
      entryFee: 50,
      durationHours: 3.5,
      rating: 4.8,
      location: 'Munnar Hill Station',
      suitableInterests: ['Nature', 'Adventure', 'Family Activities']
    },
    {
      name: 'Fort Kochi Chinese Fishing Nets & Jew Town',
      category: 'Historical Places',
      description: 'Historic colonial port town featuring giant shore-operated cantilevered fishing nets, Dutch Palace, and 1568 Synagogue.',
      entryFee: 25,
      durationHours: 3,
      rating: 4.7,
      location: 'Fort Kochi, Ernakulam',
      suitableInterests: ['Historical Places', 'Food and Culture', 'Shopping']
    },
    {
      name: 'Periyar Wildlife Sanctuary & Bamboo Rafting',
      category: 'Adventure',
      description: 'Protected tiger and elephant reserve offering guided jungle walks and serene lake boat safaris.',
      entryFee: 155,
      durationHours: 4,
      rating: 4.6,
      location: 'Thekkady',
      suitableInterests: ['Nature', 'Adventure', 'Family Activities']
    },
    {
      name: 'Varkala Cliff Beach & Papanasam Natural Springs',
      category: 'Beaches',
      description: 'Dramatic red laterite cliffs bordering the Arabian Sea with seaside cafes, yoga retreats, and sunset viewpoints.',
      entryFee: 0,
      durationHours: 3,
      rating: 4.8,
      location: 'Varkala, South Kerala',
      suitableInterests: ['Beaches', 'Nature', 'Food and Culture']
    },
    {
      name: 'Kerala Kathakali Centre Classical Performance',
      category: 'Food and Culture',
      description: 'Live performance of ancient Sanskrit dance-drama featuring elaborate facial makeup, storytelling, and Kalaripayattu martial arts.',
      entryFee: 400,
      durationHours: 2,
      rating: 4.7,
      location: 'KB Jacob Rd, Fort Kochi',
      suitableInterests: ['Food and Culture', 'Historical Places']
    }
  ],
  delhi: [
    {
      name: 'Red Fort (Lal Qila) & Diwan-i-Aam',
      category: 'Historical Places',
      description: 'Grand 17th-century red sandstone fortress of the Mughal dynasty, symbol of India’s sovereignty and UNESCO site.',
      entryFee: 50,
      durationHours: 2.5,
      rating: 4.7,
      location: 'Netaji Subhash Marg, Chandni Chowk',
      suitableInterests: ['Historical Places', 'Family Activities']
    },
    {
      name: 'Qutub Minar & Mehrauli Archaeological Park',
      category: 'Historical Places',
      description: '73-metre minaret of victory built in 1192 surrounded by the ancient Iron Pillar and intricately carved sandstone arches.',
      entryFee: 50,
      durationHours: 2.5,
      rating: 4.8,
      location: 'Mehrauli, South Delhi',
      suitableInterests: ['Historical Places', 'Food and Culture']
    },
    {
      name: 'India Gate & Kartavya Path Memorial',
      category: 'Historical Places',
      description: 'War memorial arch standing 42 metres high in the heart of New Delhi, flanked by lush manicured lawns and fountains.',
      entryFee: 0,
      durationHours: 1.5,
      rating: 4.8,
      location: 'Central Secretariat, New Delhi',
      suitableInterests: ['Historical Places', 'Family Activities', 'Food and Culture']
    },
    {
      name: 'Humayun’s Tomb & Charbagh Mughal Garden',
      category: 'Historical Places',
      description: 'The architectural precursor to the Taj Mahal, set within symmetrical Persian water gardens on the banks of Yamuna.',
      entryFee: 50,
      durationHours: 2,
      rating: 4.8,
      location: 'Nizamuddin East',
      suitableInterests: ['Historical Places', 'Food and Culture', 'Nature']
    },
    {
      name: 'Chandni Chowk, Paranthe Wali Gali & Jama Masjid',
      category: 'Food and Culture',
      description: 'Old Delhi’s sensory culinary bazaar with stuffed tawa parathas, jalebis, spices at Khari Baoli, and India’s grandest mosque.',
      entryFee: 0,
      durationHours: 3,
      rating: 4.6,
      location: 'Old Delhi',
      suitableInterests: ['Food and Culture', 'Shopping', 'Religious Places']
    },
    {
      name: 'Lotus Temple (Bahá\'í House of Worship)',
      category: 'Religious Places',
      description: 'Architectural wonder shaped like a blooming white marble lotus flower, open to people of all faiths for silent meditation.',
      entryFee: 0,
      durationHours: 1.5,
      rating: 4.6,
      location: 'Kalkaji, South Delhi',
      suitableInterests: ['Religious Places', 'Family Activities', 'Nature']
    },
    {
      name: 'Dilli Haat Food & Crafts Bazaar (INA)',
      category: 'Shopping',
      description: 'Open-air craft village showcasing regional handlooms, tribal artisans, and food stalls from every Indian state.',
      entryFee: 30,
      durationHours: 2.5,
      rating: 4.7,
      location: 'Kidwai Nagar West',
      suitableInterests: ['Shopping', 'Food and Culture', 'Family Activities']
    }
  ]
};

export const HOTELS_CATALOG: Record<string, any[]> = {
  mumbai: [
    {
      id: 'h-mum-1',
      name: 'Taj Mahal Palace & Tower',
      tier: 'Luxury',
      pricePerNight: 16500,
      rating: 4.9,
      location: 'Apollo Bunder, Colaba',
      amenities: ['Sea View', 'Infinity Pool', 'Heritage Spa', 'Fine Dining', 'Free Wi-Fi'],
      description: 'Legendary 1903 luxury landmark facing the Gateway of India with world-class hospitality.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-mum-2',
      name: 'Residency Hotel Fort',
      tier: 'Mid-range',
      pricePerNight: 3800,
      rating: 4.5,
      location: 'Fort, South Mumbai',
      amenities: ['Free Breakfast', 'Central AC', 'Metro Proximity', 'Concierge'],
      description: 'Comfortable boutique stay in the heritage district, walking distance to CST station.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-mum-3',
      name: 'Zostel Mumbai (Backpacker Stay)',
      tier: 'Budget',
      pricePerNight: 1100,
      rating: 4.4,
      location: 'Andheri East',
      amenities: ['Clean Pods', 'Rooftop Cafe', 'Common Lounge', 'High-Speed Wi-Fi'],
      description: 'Vibrant backpacker hostel perfect for solo explorers and budget travellers.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'
    }
  ],
  goa: [
    {
      id: 'h-goa-1',
      name: 'Taj Exotica Resort & Spa',
      tier: 'Luxury',
      pricePerNight: 14000,
      rating: 4.8,
      location: 'Benaulim, South Goa',
      amenities: ['Private Beach', 'Golf Greens', 'Ayurvedic Spa', 'Poolside Bar'],
      description: 'Mediterranean-style coastal resort sprawling over 56 acres of lush gardens along Benaulim Beach.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-goa-2',
      name: 'Santana Beach Resort',
      tier: 'Mid-range',
      pricePerNight: 3200,
      rating: 4.5,
      location: 'Candolim, North Goa',
      amenities: ['2 Swimming Pools', 'Beach Access', 'Garden View', 'Restaurant'],
      description: 'Charming Portuguese-style bungalows with direct access to pristine Candolim sand.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-goa-3',
      name: 'Jungle by the Hostel Crowd',
      tier: 'Budget',
      pricePerNight: 950,
      rating: 4.6,
      location: 'Vagator, North Goa',
      amenities: ['Jungle Garden', 'Morning Yoga', 'Communal Kitchen', 'Bike Rental'],
      description: 'Relaxed eco-hostel nestled in tropical coconut groves near Vagator Beach.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80'
    }
  ],
  jaipur: [
    {
      id: 'h-jai-1',
      name: 'Rambagh Palace (The Jewel of Jaipur)',
      tier: 'Luxury',
      pricePerNight: 24000,
      rating: 4.9,
      location: 'Bhawani Singh Road, Jaipur',
      amenities: ['Royal Suites', 'Peacock Gardens', 'Polo Bar', 'Butler Service'],
      description: 'Former residence of the Maharaja of Jaipur, renowned as one of the finest palace hotels globally.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-jai-2',
      name: 'Umaid Bhawan Heritage House',
      tier: 'Mid-range',
      pricePerNight: 3100,
      rating: 4.6,
      location: 'Bani Park, Jaipur',
      amenities: ['Rooftop Swimming Pool', 'Heritage Decor', 'Puppet Shows', 'Free Breakfast'],
      description: 'Traditional Rajput heritage hotel featuring intricately carved balconies and courtyard dining.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-jai-3',
      name: 'Moustache Hostel Jaipur',
      tier: 'Budget',
      pricePerNight: 850,
      rating: 4.5,
      location: 'MI Road, Jaipur',
      amenities: ['Rooftop Fort Views', 'AC Dorms', 'Chai Sessions', 'Travel Desk'],
      description: 'Colorful backpacker hub near Jaipur Railway Station with vibrant Rajasthani wall murals.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'
    }
  ],
  kerala: [
    {
      id: 'h-ker-1',
      name: 'Kumarakom Lake Resort',
      tier: 'Luxury',
      pricePerNight: 15500,
      rating: 4.9,
      location: 'Vembanad Lake, Kumarakom',
      amenities: ['Private Plunge Pool', 'Meandering Pool', 'Ayurveda Spa', 'Sunset Cruise'],
      description: 'Heritage villas reconstructed from traditional 16th-century ancestral Kerala homesteads.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-ker-2',
      name: 'Lake Palace Backwater Resort',
      tier: 'Mid-range',
      pricePerNight: 3500,
      rating: 4.5,
      location: 'Alleppey Backwaters',
      amenities: ['Canal View', 'Houseboat Dock', 'Kerala Cuisine', 'Fishing Deck'],
      description: 'Serene lakeside cottages nestled beside serene waterways, surrounded by coconut palms.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-ker-3',
      name: 'Zostel Alleppey',
      tier: 'Budget',
      pricePerNight: 900,
      rating: 4.5,
      location: 'Near Alleppey Beach',
      amenities: ['Hammocks', 'Kayaking Tours', 'Common Kitchen', 'Bike Rental'],
      description: 'Cozy beachside hostel with relaxed coastal vibes and daily backwater canoe trips.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80'
    }
  ],
  delhi: [
    {
      id: 'h-del-1',
      name: 'The Imperial New Delhi',
      tier: 'Luxury',
      pricePerNight: 14500,
      rating: 4.8,
      location: 'Janpath, Connaught Place',
      amenities: ['Colonial Architecture', 'Art Collection', 'Outdoor Pool', 'Royal Ballrooms'],
      description: 'Award-winning colonial-era hotel steeped in heritage, located moments from Connaught Place.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-del-2',
      name: 'Bloomrooms @ Janpath',
      tier: 'Mid-range',
      pricePerNight: 3400,
      rating: 4.6,
      location: 'Janpath Lane, Connaught Place',
      amenities: ['Modern CloudBeds', 'Free High-Speed Wi-Fi', 'Cafe Bloom', 'Near Metro'],
      description: 'Bright cheerful signature yellow boutique hotel in prime Central Delhi.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'h-del-3',
      name: 'Madpackers Delhi',
      tier: 'Budget',
      pricePerNight: 950,
      rating: 4.7,
      location: 'Hauz Khas Village Area',
      amenities: ['Rooftop Terrace', 'Social Events', 'Community Dinners', 'Clean Bunks'],
      description: 'India’s top-rated social hostel located near green parks and historic monuments of South Delhi.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'
    }
  ]
};

export const RESTAURANTS_CATALOG: Record<string, any[]> = {
  mumbai: [
    {
      id: 'r-mum-1',
      name: 'Trishna Seafood Restaurant',
      cuisine: 'Coastal Indian / Mangalorean',
      specialty: 'Butter Garlic Crab, Koliwada Prawns & Neer Dosa',
      avgCostForTwo: 1800,
      rating: 4.8,
      location: 'Kala Ghoda, Fort',
      ambiance: 'Cozy heritage dining',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-mum-2',
      name: 'Britannia & Co. Restaurant',
      cuisine: 'Parsi / Irani Cafe',
      specialty: 'Berry Pulao, Sali Boti & Caramel Custard',
      avgCostForTwo: 900,
      rating: 4.7,
      location: 'Ballard Estate, Fort',
      ambiance: 'Colonial 1923 vintage charm',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-mum-3',
      name: 'Aaram Vada Pav & Bademiya Kebabs',
      cuisine: 'Iconic Mumbai Street Food',
      specialty: 'Spicy Batata Vada Pav, Pav Bhaji & Chicken Baida Roti',
      avgCostForTwo: 350,
      rating: 4.6,
      location: 'CSMT Station / Colaba',
      ambiance: 'Fast & bustling authentic street stall',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    }
  ],
  goa: [
    {
      id: 'r-goa-1',
      name: 'Fisherman’s Wharf',
      cuisine: 'Authentic Goan Seafood',
      specialty: 'Kingfish Rechado, Crab Xec Xec & Bebinca',
      avgCostForTwo: 1500,
      rating: 4.7,
      location: 'Cavelossim / Panaji Riverfront',
      ambiance: 'Riverside open-air with live acoustic music',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-goa-2',
      name: 'Curlies & Shiva Valley Beach Shacks',
      cuisine: 'Goan Coastal & Continental',
      specialty: 'Prawn Balchao, Wood-fired Pizza & Chilled Coconut',
      avgCostForTwo: 850,
      rating: 4.5,
      location: 'Anjuna Beach',
      ambiance: 'Sunset views with sand beneath your feet',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-goa-3',
      name: 'Vinayak Family Restaurant',
      cuisine: 'Traditional Goan Thali',
      specialty: 'Fish Thali with Tisreo (Clams), Fried Prawns & Sol Kadi',
      avgCostForTwo: 500,
      rating: 4.8,
      location: 'Assagao, North Goa',
      ambiance: 'Homely, local favourite',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    }
  ],
  jaipur: [
    {
      id: 'r-jai-1',
      name: '1135 AD (Amer Fort Fine Dining)',
      cuisine: 'Royal Rajasthani Mughlai',
      specialty: 'Laal Maas, Safed Maas & Shahi Thali in Silverware',
      avgCostForTwo: 2400,
      rating: 4.8,
      location: 'Amer Fort Top Terrace',
      ambiance: 'Opulent palace setting with candlelight',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-jai-2',
      name: 'Laxmi Mishthan Bhandar (LMB)',
      cuisine: 'Traditional Marwari Sweets & Thali',
      specialty: 'Dal Baati Churma, Ghewar & Pyaaz Kachori',
      avgCostForTwo: 800,
      rating: 4.6,
      location: 'Johari Bazaar, Old City',
      ambiance: 'Legendary 1727 heritage vegetarian landmark',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-jai-3',
      name: 'Rawat Mishthan Bhandar',
      cuisine: 'Jaipuri Breakfast & Snacks',
      specialty: 'Crispy Onion Pyaaz Kachori, Mawa Kachori & Saffron Lassi',
      avgCostForTwo: 300,
      rating: 4.7,
      location: 'Station Road, Jaipur',
      ambiance: 'Bustling all-day tea and snack counter',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    }
  ],
  kerala: [
    {
      id: 'r-ker-1',
      name: 'Paragon Restaurant Kochi',
      cuisine: 'Malabar Coastal Cuisine',
      specialty: 'Malabar Chicken Biryani, Fish Moilee & Appam',
      avgCostForTwo: 900,
      rating: 4.8,
      location: 'Lulu Mall / Fort Kochi',
      ambiance: 'Beloved Kerala culinary institution',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-ker-2',
      name: 'Kashi Art Cafe',
      cuisine: 'Fusion & Continental Cafe',
      specialty: 'Fresh Roasted Coffee, Dark Chocolate Cake & Grilled Fish',
      avgCostForTwo: 750,
      rating: 4.7,
      location: 'Burgher Street, Fort Kochi',
      ambiance: 'Art gallery courtyard with bohemian vibe',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-ker-3',
      name: 'Mullapanthal Toddy Shop & Family Dining',
      cuisine: 'Traditional Spicy Kerala Toddy Fare',
      specialty: 'Karimeen Pollichathu (Pearl Spot in banana leaf) & Kappa Meen',
      avgCostForTwo: 600,
      rating: 4.6,
      location: 'Tripunithura, Kochi',
      ambiance: 'Rustic local culinary experience',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    }
  ],
  delhi: [
    {
      id: 'r-del-1',
      name: 'Bukhara (ITC Maurya)',
      cuisine: 'North-West Frontier Cuisine',
      specialty: 'Dal Bukhara (slow-cooked 18 hours), Sikandari Raan & Naan',
      avgCostForTwo: 5500,
      rating: 4.9,
      location: 'Chanakyapuri, Diplomatic Enclave',
      ambiance: 'Earthy stone and clay rustic grandeur',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-del-2',
      name: 'Karim’s & Al Jawahar',
      cuisine: 'Old Delhi Mughlai Royal Fare',
      specialty: 'Mutton Burra Kebab, Butter Chicken & Shahi Tukda',
      avgCostForTwo: 900,
      rating: 4.7,
      location: 'Gali Kababian, Jama Masjid',
      ambiance: 'Historic culinary trail established in 1913',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'r-del-3',
      name: 'Haldiram’s & Saravana Bhavan (Connaught Place)',
      cuisine: 'Authentic Indian Street Snacks & South Indian',
      specialty: 'Raj Kachori, Chole Bhature & Ghee Roast Dosa',
      avgCostForTwo: 450,
      rating: 4.6,
      location: 'Connaught Place Outer Circle',
      ambiance: 'Family-friendly hygienic fast dining',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    }
  ]
};

export const WEATHER_CATALOG: Record<string, any> = {
  mumbai: {
    tempCelsius: 29,
    condition: 'Pleasant & Sunny with Coastal Breeze',
    iconName: 'Sun',
    humidityPercent: 68,
    bestSeason: 'November to February (Mild & Cool)',
    advisory: 'Carry light cotton clothing, sunscreen, and sunglasses for seaside afternoon walks.',
    clothingTip: 'Breathable linens, comfortable walking shoes.'
  },
  goa: {
    tempCelsius: 30,
    condition: 'Sunny with Tropical Sea Breeze',
    iconName: 'Sun',
    humidityPercent: 72,
    bestSeason: 'October to March (Peak Beach Season)',
    advisory: 'Stay hydrated during noon water activities. Ocean swells are calmest Nov-Feb.',
    clothingTip: 'Beachwear, flip-flops, UV hat, swimsuits.'
  },
  jaipur: {
    tempCelsius: 26,
    condition: 'Clear Sky with Crisp Desert Sun',
    iconName: 'Sun',
    humidityPercent: 35,
    bestSeason: 'October to March (Pleasant Days & Cool Nights)',
    advisory: 'Fort walking involves steps; carry water and comfortable sneakers.',
    clothingTip: 'Light layers for afternoon, light shawl/jacket for evenings.'
  },
  kerala: {
    tempCelsius: 28,
    condition: 'Partly Cloudy with Fresh Lagoon Breeze',
    iconName: 'CloudSun',
    humidityPercent: 78,
    bestSeason: 'September to March (Post-monsoon Lush Beauty)',
    advisory: 'Great weather for backwater boating and tea estate treks.',
    clothingTip: 'Loose cottons, mosquito repellent for backwaters.'
  },
  delhi: {
    tempCelsius: 24,
    condition: 'Mild Sunny Afternoon with Light Haze',
    iconName: 'CloudSun',
    humidityPercent: 52,
    bestSeason: 'October to March (Cool & Festive)',
    advisory: 'Check morning AQI index; metro is fastest and climate-controlled.',
    clothingTip: 'Comfortable sneakers for heritage monuments.'
  }
};
