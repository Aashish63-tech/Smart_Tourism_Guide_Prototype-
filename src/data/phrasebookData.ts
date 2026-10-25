import { TranslationPhrase } from '../types';

export const POPULAR_PHRASES: TranslationPhrase[] = [
  {
    id: 'p-1',
    category: 'Greetings',
    english: 'Hello / Greetings! Welcome.',
    hindi: 'Namaste! Aapka swaagat hai.',
    hindiScript: 'नमस्ते! आपका स्वागत है।',
    pronunciation: 'Nah-mas-tay! Aap-kah swaa-gat hai'
  },
  {
    id: 'p-2',
    category: 'Greetings',
    english: 'How are you? I am doing well, thank you.',
    hindi: 'Aap kaise hain? Main theek hoon, dhanyavaad.',
    hindiScript: 'आप कैसे हैं? मैं ठीक हूँ, धन्यवाद।',
    pronunciation: 'Aap kay-say hain? Main theek hoon, dhun-yuh-vaad'
  },
  {
    id: 'p-3',
    category: 'Directions',
    english: 'Where is the nearest metro / railway station?',
    hindi: 'Nazdeeki metro ya railway station kahan hai?',
    hindiScript: 'नज़दीकी मेट्रो या रेलवे स्टेशन कहाँ है?',
    pronunciation: 'Naz-dee-kee metro yaa railway station kah-haan hai?'
  },
  {
    id: 'p-4',
    category: 'Directions',
    english: 'Please take me to this hotel address.',
    hindi: 'Kripya mujhe is hotel ke pate par le chaliye.',
    hindiScript: 'कृपया मुझे इस होटल के पते पर ले चलिए।',
    pronunciation: 'Krip-yaa moo-jhay iss hotel kay patay par lay chal-iye'
  },
  {
    id: 'p-5',
    category: 'Food & Dining',
    english: 'Is this food spicy? Please make it less spicy.',
    hindi: 'Kya yeh khana theekha hai? Kripya kam theekha banayein.',
    hindiScript: 'क्या यह खाना तीखा है? कृपया कम तीखा बनाएं।',
    pronunciation: 'Kya yeh khaa-naa tee-khaa hai? Krip-yaa kam tee-khaa bah-nah-yein'
  },
  {
    id: 'p-6',
    category: 'Food & Dining',
    english: 'May I please have the bill / drinking water?',
    hindi: 'Kripya bill aur peene ka paani layiye.',
    hindiScript: 'कृपया बिल और पीने का पानी लाइए।',
    pronunciation: 'Krip-yaa bill aur pee-nay kaa paa-nee laa-ee-yay'
  },
  {
    id: 'p-7',
    category: 'Shopping',
    english: 'How much does this item cost?',
    hindi: 'Iska kitna daam hai / Yeh kitne ka hai?',
    hindiScript: 'इसका कितना दाम है / यह कितने का है?',
    pronunciation: 'Iss-kaa kit-naa daam hai / Yeh kit-nay kaa hai?'
  },
  {
    id: 'p-8',
    category: 'Shopping',
    english: 'Can you please give a discount or best price?',
    hindi: 'Kya thoda discount ya sahi daam mil sakta hai?',
    hindiScript: 'क्या थोड़ा डिस्काउंट या सही दाम मिल सकता है?',
    pronunciation: 'Kya thoh-daa discount yaa sa-hee daam mil sak-taa hai?'
  },
  {
    id: 'p-9',
    category: 'Emergency',
    english: 'Please help me! I need a doctor or police.',
    hindi: 'Kripya madad kijiye! Mujhe doctor ya police ki zaroorat hai.',
    hindiScript: 'कृपया मदद कीजिए! मुझे डॉक्टर या पुलिस की ज़रूरत है।',
    pronunciation: 'Krip-yaa mah-dad kee-jee-yay! Moo-jhay doctor yaa police kee zah-roo-rat hai'
  },
  {
    id: 'p-10',
    category: 'Emergency',
    english: 'Where is the nearest hospital or pharmacy?',
    hindi: 'Nazdeeki aspatal ya dawai ki dukaan kahan hai?',
    hindiScript: 'नज़दीकी अस्पताल या दवाई की दुकान कहाँ है?',
    pronunciation: 'Naz-dee-kee as-pa-taal yaa dah-waa-ee kee doo-kaan kah-haan hai?'
  }
];

export const LANGUAGE_OPTIONS = [
  { code: 'hi-IN', label: 'Hindi (हिंदी)', voiceLang: 'hi-IN' },
  { code: 'en-IN', label: 'Indian English', voiceLang: 'en-IN' },
  { code: 'mr-IN', label: 'Marathi (मराठी)', voiceLang: 'mr-IN' },
  { code: 'bn-IN', label: 'Bengali (বাংলা)', voiceLang: 'bn-IN' },
  { code: 'ta-IN', label: 'Tamil (தமிழ்)', voiceLang: 'ta-IN' },
  { code: 'te-IN', label: 'Telugu (తెలుగు)', voiceLang: 'te-IN' },
  { code: 'es-ES', label: 'Spanish (Español)', voiceLang: 'es-ES' },
  { code: 'fr-FR', label: 'French (Français)', voiceLang: 'fr-FR' },
  { code: 'de-DE', label: 'German (Deutsch)', voiceLang: 'de-DE' }
];

// Multilingual lookup for dynamic translation demo
export const MULTILINGUAL_DICTIONARY: Record<string, Record<string, string>> = {
  'hello': {
    'hi-IN': 'नमस्ते (Namaste)',
    'mr-IN': 'नमस्कार (Namaskar)',
    'bn-IN': 'নমস্কার (Nomoshkar)',
    'ta-IN': 'வணக்கம் (Vanakkam)',
    'te-IN': 'నమస్కారం (Namaskaram)',
    'es-ES': 'Hola (Oh-lah)',
    'fr-FR': 'Bonjour (Bon-zhoor)',
    'de-DE': 'Hallo (Hah-lo)'
  },
  'thank you': {
    'hi-IN': 'धन्यवाद (Dhanyavaad)',
    'mr-IN': 'धन्यवाद (Dhanyavaad)',
    'bn-IN': 'ধন্যবাদ (Dhonnobadh)',
    'ta-IN': 'நன்றி (Nandri)',
    'te-IN': 'ధన్యవాదాలు (Dhanyavadalu)',
    'es-ES': 'Gracias (Grah-see-as)',
    'fr-FR': 'Merci (Mair-see)',
    'de-DE': 'Danke (Dahn-kuh)'
  },
  'where is the station': {
    'hi-IN': 'स्टेशन कहाँ है? (Station kahan hai?)',
    'mr-IN': 'स्टेशन कुठे आहे? (Station kuthe aahe?)',
    'bn-IN': 'স্টেশন কোথায়? (Station kothay?)',
    'ta-IN': 'ரயில் நிலையம் எங்கே? (Rayil nilayam engay?)',
    'te-IN': 'స్టేషన్ ఎక్కడ ఉంది? (Station ekkada undi?)',
    'es-ES': '¿Dónde está la estación?',
    'fr-FR': 'Où est la gare?',
    'de-DE': 'Wo ist der Bahnhof?'
  },
  'how much': {
    'hi-IN': 'यह कितने का है? (Yeh kitne ka hai?)',
    'mr-IN': 'हे कितीला आहे? (He kitila aahe?)',
    'bn-IN': 'এটার দাম কত? (Etar daam koto?)',
    'ta-IN': 'இதன் விலை என்ன? (Idhan vilai enna?)',
    'te-IN': 'దీని ధర ఎంత? (Deeni dhara entha?)',
    'es-ES': '¿Cuánto cuesta esto?',
    'fr-FR': 'Combien ça coûte?',
    'de-DE': 'Wie viel kostet das?'
  },
  'help me': {
    'hi-IN': 'कृपया मेरी मदद करें (Kripya meri madad karein)',
    'mr-IN': 'कृपया मला मदत करा (Krupaya mala madat kara)',
    'bn-IN': 'আমাকে সাহায্য করুন (Aamake sahajjo korun)',
    'ta-IN': 'தயவுசெய்து எனக்கு உதவுங்கள் (Tayavuseythu enaku uthavungal)',
    'te-IN': 'దయచేసి నాకు సహాయం చేయండి (Dayachesi naaku sahayam cheyandi)',
    'es-ES': '¡Por favor ayúdame!',
    'fr-FR': 'Aidez-moi s’il vous plaît!',
    'de-DE': 'Bitte helfen Sie mir!'
  }
};
