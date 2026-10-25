export interface EmergencyContactInfo {
  id: string;
  title: string;
  number: string;
  description: string;
  coverage: string;
  isPrimary?: boolean;
  category: 'National' | 'Medical' | 'Police' | 'Women' | 'Tourist';
}

export const NATIONAL_EMERGENCY_NUMBERS: EmergencyContactInfo[] = [
  {
    id: 'em-112',
    title: 'National Emergency Response Support System (ERSS)',
    number: '112',
    description: 'Unified single emergency number across India for Police, Fire, Ambulance, and Disaster management.',
    coverage: 'All India (24x7 Toll-Free, GPS-Enabled Dispatch)',
    isPrimary: true,
    category: 'National'
  },
  {
    id: 'em-1363',
    title: 'Incredible India 24x7 Tourist Helpline',
    number: '1363',
    description: 'Ministry of Tourism multi-lingual helpline providing guidance, safety info, and emergency support in 12 languages.',
    coverage: 'All India (Toll-Free in English, Hindi & 10 foreign languages)',
    isPrimary: true,
    category: 'Tourist'
  },
  {
    id: 'em-100',
    title: 'Police Assistance Control Room',
    number: '100',
    description: 'Direct police control room for immediate crime reporting, protection, and emergency law enforcement.',
    coverage: 'Nationwide (24x7)',
    category: 'Police'
  },
  {
    id: 'em-108',
    title: 'Emergency Medical & Ambulance Service (EMRI)',
    number: '108',
    description: 'Dispatches emergency medical technicians and ALS/BLS ambulances for medical emergencies.',
    coverage: 'Nationwide (Free 24x7)',
    category: 'Medical'
  },
  {
    id: 'em-1091',
    title: 'Women Helpline in Distress',
    number: '1091',
    description: 'Specialized 24x7 helpline for women safety, distress response, counseling, and swift police escort.',
    coverage: 'Nationwide (24x7)',
    category: 'Women'
  },
  {
    id: 'em-101',
    title: 'Fire Brigade & Rescue Service',
    number: '101',
    description: 'Fire suppression, search and rescue in building fires and urban accidents.',
    coverage: 'Nationwide (24x7)',
    category: 'National'
  }
];

export interface CityEmergencyDirectory {
  city: string;
  touristPolice: string;
  touristPolicePhone: string;
  topHospitals: {
    name: string;
    location: string;
    phone: string;
    type: 'Government Super-Speciality' | 'Private Multi-Speciality';
  }[];
  bloodBankPhone: string;
  chemists24x7: string;
}

export const CITY_EMERGENCY_DIRECTORIES: Record<string, CityEmergencyDirectory> = {
  mumbai: {
    city: 'Mumbai',
    touristPolice: 'Mumbai Tourist Police Unit, CST & Gateway',
    touristPolicePhone: '+91-22-22620826',
    topHospitals: [
      {
        name: 'KEM Hospital & Seth GS Medical College',
        location: 'Acharya Donde Marg, Parel',
        phone: '+91-22-24107000',
        type: 'Government Super-Speciality'
      },
      {
        name: 'Lilavati Hospital & Research Centre',
        location: 'A-791, Bandra Reclamation, Bandra West',
        phone: '+91-22-26751000',
        type: 'Private Multi-Speciality'
      },
      {
        name: 'Bombay Hospital & Medical Research Centre',
        location: '12 Marine Lines, Mumbai',
        phone: '+91-22-22067676',
        type: 'Private Multi-Speciality'
      }
    ],
    bloodBankPhone: '+91-22-24128888',
    chemists24x7: 'Noble Chemist (Colaba) / Apollo Pharmacy (Across Mumbai)'
  },
  goa: {
    city: 'Goa',
    touristPolice: 'Goa Tourist Security Force, Calangute & Panaji',
    touristPolicePhone: '+91-832-2419440',
    topHospitals: [
      {
        name: 'Goa Medical College & Hospital (GMC)',
        location: 'Bambolim, Central Goa',
        phone: '+91-832-2458727',
        type: 'Government Super-Speciality'
      },
      {
        name: 'Manipal Hospital Goa',
        location: 'Dr E Borges Road, Dona Paula',
        phone: '+91-832-2453000',
        type: 'Private Multi-Speciality'
      }
    ],
    bloodBankPhone: '+91-832-2458728',
    chemists24x7: 'GMC 24-hr Pharmacy & Hindu Pharmacy (Panaji)'
  },
  jaipur: {
    city: 'Jaipur',
    touristPolice: 'Rajasthan Tourist Assistance Force, Amer & Hawa Mahal',
    touristPolicePhone: '+91-141-2601919',
    topHospitals: [
      {
        name: 'Sawai Man Singh (SMS) Hospital',
        location: 'JLN Marg, Ashok Nagar, Jaipur',
        phone: '+91-141-2560291',
        type: 'Government Super-Speciality'
      },
      {
        name: 'Fortis Escorts Hospital',
        location: 'Jawaharlal Nehru Marg, Malviya Nagar',
        phone: '+91-141-2547000',
        type: 'Private Multi-Speciality'
      }
    ],
    bloodBankPhone: '+91-141-2560292',
    chemists24x7: 'SMS Hospital 24/7 Generic Drug Store'
  },
  kerala: {
    city: 'Kerala (Kochi & Alleppey)',
    touristPolice: 'Kerala Tourist Police Station, Fort Kochi',
    touristPolicePhone: '+91-484-2215640',
    topHospitals: [
      {
        name: 'Ernakulam General Hospital',
        location: 'Hospital Road, Marine Drive, Kochi',
        phone: '+91-484-2361251',
        type: 'Government Super-Speciality'
      },
      {
        name: 'Aster Medcity Kochi',
        location: 'South Chittoor, Cheranalloor, Kochi',
        phone: '+91-484-6699999',
        type: 'Private Multi-Speciality'
      }
    ],
    bloodBankPhone: '+91-484-2361252',
    chemists24x7: 'Neethi Medical Stores (Govt Subsidized 24x7)'
  },
  delhi: {
    city: 'Delhi',
    touristPolice: 'Delhi Police Tourist Patrol & PCR Mobile Units',
    touristPolicePhone: '+91-11-23361231',
    topHospitals: [
      {
        name: 'AIIMS (All India Institute of Medical Sciences)',
        location: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi',
        phone: '+91-11-26588500',
        type: 'Government Super-Speciality'
      },
      {
        name: 'Safdarjung Hospital Emergency Trauma Centre',
        location: 'Ring Road, Opposite AIIMS, New Delhi',
        phone: '+91-11-26165060',
        type: 'Government Super-Speciality'
      },
      {
        name: 'Max Super Speciality Hospital Saket',
        location: '1, 2 Press Enclave Road, Saket',
        phone: '+91-11-26515050',
        type: 'Private Multi-Speciality'
      }
    ],
    bloodBankPhone: '+91-11-26594438',
    chemists24x7: 'AIIMS Gate No 1 Chemist / Apollo 24/7'
  }
};
