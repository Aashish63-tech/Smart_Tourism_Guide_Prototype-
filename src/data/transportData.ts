export interface CityTransportGuide {
  id: string;
  name: string;
  city: string;
  modes: {
    name: string;
    description: string;
    baseFare: number;
    perKmRate: number;
    recommendedFor: string;
    icon: string;
  }[];
  localTip: string;
}

export const CITY_TRANSPORT_GUIDES: Record<string, CityTransportGuide> = {
  mumbai: {
    id: 'mumbai',
    name: 'Mumbai Local Transit Guide',
    city: 'Mumbai',
    modes: [
      {
        name: 'Mumbai Suburban Local Trains',
        description: 'Lifeline of Mumbai. Fast and ultra-budget friendly across Western, Central, and Harbour lines.',
        baseFare: 10,
        perKmRate: 1.5,
        recommendedFor: 'Long distance travel between South Mumbai & suburbs during non-peak hours (11 AM - 4 PM).',
        icon: 'Train'
      },
      {
        name: 'Mumbai Metro (Lines 1, 2A, 7, 3)',
        description: 'Air-conditioned modern elevated and underground rapid transit.',
        baseFare: 20,
        perKmRate: 3.5,
        recommendedFor: 'Connecting Ghatkopar-Versova and North-South highway corridors.',
        icon: 'TrainFront'
      },
      {
        name: 'Metered Black & Yellow Cabs (Kaali Peeli)',
        description: 'Iconic metered cabs in South and Central Mumbai.',
        baseFare: 28,
        perKmRate: 18.66,
        recommendedFor: 'South Mumbai heritage sightseeing (Colaba, Marine Drive, Fort).',
        icon: 'Car'
      },
      {
        name: 'Auto-Rickshaw (Suburbs only)',
        description: 'Metered three-wheelers operating north of Bandra / Sion.',
        baseFare: 23,
        perKmRate: 15.33,
        recommendedFor: 'Short neighbourhood hops in Bandra, Juhu, and Andheri.',
        icon: 'Navigation'
      },
      {
        name: 'App Cabs (Uber / Ola / InDrive)',
        description: 'On-demand AC hatchbacks and sedans with doorstep pickup.',
        baseFare: 80,
        perKmRate: 22,
        recommendedFor: 'Airport transfers and late-night travel.',
        icon: 'Smartphone'
      }
    ],
    localTip: 'Avoid rush hour trains (8:30-10:30 AM & 6:00-8:30 PM). Use UTS app for digital train tickets.'
  },
  goa: {
    id: 'goa',
    name: 'Goa Mobility & Beach Transport',
    city: 'Goa',
    modes: [
      {
        name: 'Self-Drive Scooters & Bikes (Yellow Plate)',
        description: 'Most popular and flexible way to explore North and South Goa beaches.',
        baseFare: 400, // per day
        perKmRate: 4, // estimated petrol
        recommendedFor: 'Couples and solo travelers hopping between beach shacks.',
        icon: 'Bike'
      },
      {
        name: 'Goa Miles App / Government Cabs',
        description: 'Official app-based taxi service operating at state-regulated rates.',
        baseFare: 120,
        perKmRate: 28,
        recommendedFor: 'Airport runs (Dabolim / MOPA) and hotel transfers.',
        icon: 'Car'
      },
      {
        name: 'Pilot Motorcycles (Two-Wheeler Taxi)',
        description: 'Unique Goan licensed motorcycle taxis for single passengers.',
        baseFare: 30,
        perKmRate: 12,
        recommendedFor: 'Quick budget rides between villages and market centres.',
        icon: 'Navigation'
      },
      {
        name: 'Kadamba AC & Electric Buses',
        description: 'State transport buses connecting Panaji, Margao, Mapusa, and Vasco.',
        baseFare: 15,
        perKmRate: 2.5,
        recommendedFor: 'Inter-city travel across North and South Goa.',
        icon: 'Bus'
      }
    ],
    localTip: 'Always carry a valid driving license for scooter rentals and wear helmets at all times.'
  },
  jaipur: {
    id: 'jaipur',
    name: 'Jaipur Heritage Transport Guide',
    city: 'Jaipur',
    modes: [
      {
        name: 'E-Rickshaws & Auto-Rickshaws',
        description: 'Brisk electric rickshaws perfect for narrow lanes of the walled Pink City.',
        baseFare: 30,
        perKmRate: 12,
        recommendedFor: 'Bazaars, Hawa Mahal, and City Palace shopping.',
        icon: 'Navigation'
      },
      {
        name: 'Jaipur Metro (Mansarovar to Badi Chaupar)',
        description: 'Clean elevated and underground metro connecting old and new Jaipur.',
        baseFare: 12,
        perKmRate: 3.0,
        recommendedFor: 'Direct access to the old Pink City (Badi Chaupar station).',
        icon: 'TrainFront'
      },
      {
        name: 'Tourist Cabs & Day Packages',
        description: 'AC sedans hired for a full day (8 hours / 80 km) for hilltop fort tours.',
        baseFare: 1800, // full day package
        perKmRate: 18,
        recommendedFor: 'Visiting Amer, Jaigarh, and Nahargarh Forts on the hills.',
        icon: 'Car'
      },
      {
        name: 'RSRTC Low Floor City Buses',
        description: 'Air-conditioned public buses connecting major monuments and railway stations.',
        baseFare: 15,
        perKmRate: 2.2,
        recommendedFor: 'Budget travelers moving along JLN Marg and MI Road.',
        icon: 'Bus'
      }
    ],
    localTip: 'Always negotiate auto fares beforehand or insist on using metered/app cabs for hill forts.'
  },
  kerala: {
    id: 'kerala',
    name: 'Kerala Backwaters & Coastal Transit',
    city: 'Kerala',
    modes: [
      {
        name: 'SWTD Public Ferry Boats',
        description: 'State water transport department scenic ferries across backwater canals.',
        baseFare: 10,
        perKmRate: 1.5,
        recommendedFor: 'Ultra-scenic and cheapest backwater canal exploration in Alleppey.',
        icon: 'Ship'
      },
      {
        name: 'Kochi Water Metro',
        description: 'World-renowned eco-friendly electric air-conditioned hybrid catamarans.',
        baseFare: 20,
        perKmRate: 4,
        recommendedFor: 'Connecting Fort Kochi, Vyttila, and scenic islands.',
        icon: 'Ship'
      },
      {
        name: 'KSRTC State Buses (Minnal / Fast Passenger)',
        description: 'Frequent red-and-yellow state buses connecting towns and hill stations.',
        baseFare: 15,
        perKmRate: 2.0,
        recommendedFor: 'Scenic hill journeys from Kochi to Munnar or Thekkady.',
        icon: 'Bus'
      },
      {
        name: 'Auto-Rickshaws (Metered in Kochi)',
        description: 'Widely reliable metered autos throughout Kochi and urban centres.',
        baseFare: 30,
        perKmRate: 15,
        recommendedFor: 'Local sightseeing and market visits.',
        icon: 'Navigation'
      }
    ],
    localTip: 'Kochi Water Metro is cashless and accepts Kochi1 smart cards and UPI QR codes.'
  },
  delhi: {
    id: 'delhi',
    name: 'Delhi NCR Metro & City Transit',
    city: 'Delhi',
    modes: [
      {
        name: 'Delhi Metro (DMRC)',
        description: 'World-class 390+ km network with 12 lines reaching all tourist sites.',
        baseFare: 11,
        perKmRate: 3.2,
        recommendedFor: 'Fastest, safest, and traffic-free way to visit almost any Delhi monument.',
        icon: 'TrainFront'
      },
      {
        name: 'Green & Blue Auto-Rickshaws (CNG)',
        description: 'Metered three-wheelers connecting metro stations to monuments.',
        baseFare: 30,
        perKmRate: 11,
        recommendedFor: 'Last-mile connectivity from metro stations to monuments.',
        icon: 'Navigation'
      },
      {
        name: 'DTC Low-Floor Electric Buses',
        description: 'Air-conditioned eco buses (free for female passengers in Delhi).',
        baseFare: 10,
        perKmRate: 2.0,
        recommendedFor: 'Inner ring road and Connaught Place loops.',
        icon: 'Bus'
      },
      {
        name: 'Hop-On Hop-Off (HoHo) Tourist Bus',
        description: 'Sightseeing tourist coach covering major landmarks with flexible boarding.',
        baseFare: 500, // day pass
        perKmRate: 0,
        recommendedFor: 'First-time visitors wanting an effortless guided monument loop.',
        icon: 'Bus'
      }
    ],
    localTip: 'Buy a DMRC Tourist Card (₹200 for 1-day or ₹500 for 3-days) for unlimited metro travel.'
  }
};
