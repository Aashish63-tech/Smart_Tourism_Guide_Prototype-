import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TripPreferences, GeneratedItinerary, SavedTrip } from '../types';
import { generateTripItinerary } from '../services/itineraryGenerator';
import { storageService } from '../services/storageService';

interface TripContextType {
  preferences: TripPreferences;
  updatePreferences: (partial: Partial<TripPreferences>) => void;
  resetPreferences: () => void;
  generatedItinerary: GeneratedItinerary | null;
  setGeneratedItinerary: (itinerary: GeneratedItinerary | null) => void;
  isGenerating: boolean;
  generationStage: string;
  generationError: string | null;
  simulateGenerationFailure: boolean;
  setSimulateGenerationFailure: (simulate: boolean) => void;
  generateTrip: () => Promise<boolean>;
  retryGeneration: () => Promise<boolean>;
  savedTrips: SavedTrip[];
  saveCurrentTrip: () => SavedTrip | null;
  deleteTrip: (id: string) => void;
  isCurrentTripSaved: boolean;
  demoUser: { name: string; email: string; isGuest: boolean } | null;
  loginDemoUser: (name: string, email: string) => void;
  continueAsGuest: () => void;
  logoutDemoUser: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
}

const defaultPreferences: TripPreferences = {
  destination: 'Mumbai',
  durationDays: 3,
  totalBudget: 25000,
  travellerCount: 2,
  interests: ['Historical Places', 'Food and Culture', 'Beaches'],
  services: [
    'Tourist attractions',
    'Hotels and accommodation',
    'Restaurants and local food',
    'Transportation and fare guidance',
    'Weather information',
    'Emergency assistance'
  ],
  additionalPreferences: 'Prefer local Maharashtrian cuisine, iconic sea views, and comfortable transit.'
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Load initial preferences from draft or default
  const [preferences, setPreferences] = useState<TripPreferences>(() => {
    const draft = storageService.getDraftPreferences();
    return draft || defaultPreferences;
  });

  // Current itinerary
  const [generatedItinerary, setGeneratedItinerary] = useState<GeneratedItinerary | null>(() => {
    return storageService.getCurrentItinerary();
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState('Finding attractions...');
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [simulateGenerationFailure, setSimulateGenerationFailure] = useState(false);

  // Saved trips list
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>(() => {
    return storageService.getSavedTrips();
  });

  // Demo user
  const [demoUser, setDemoUser] = useState<{ name: string; email: string; isGuest: boolean } | null>(() => {
    return storageService.getDemoUser();
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Save draft whenever preferences change
  useEffect(() => {
    storageService.saveDraftPreferences(preferences);
  }, [preferences]);

  // Save current itinerary whenever it changes
  useEffect(() => {
    if (generatedItinerary) {
      storageService.saveCurrentItinerary(generatedItinerary);
    }
  }, [generatedItinerary]);

  const updatePreferences = (partial: Partial<TripPreferences>) => {
    setPreferences(prev => ({ ...prev, ...partial }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    storageService.saveDraftPreferences(defaultPreferences);
  };

  const isCurrentTripSaved = Boolean(
    generatedItinerary &&
    (storageService.isReferenceConfirmed(generatedItinerary.referenceId) ||
      savedTrips.some(t => t.referenceId === generatedItinerary.referenceId))
  );

  const generateTrip = async (): Promise<boolean> => {
    setIsGenerating(true);
    setGenerationError(null);

    const stages = [
      'Finding top-rated attractions & heritage landmarks...',
      'Planning optimal transit routes & daily schedules...',
      'Balancing travel budget & estimated expenses...',
      'Finalizing weather advisories & hotel suggestions...'
    ];

    try {
      for (let i = 0; i < stages.length; i++) {
        setGenerationStage(stages[i]);
        await new Promise(r => setTimeout(r, 650));
      }

      // Check if simulated failure was toggled for testing recoverable error state
      if (simulateGenerationFailure) {
        throw new Error('Simulated processing interruption: Network timeout while querying tourist destination dataset.');
      }

      const result = generateTripItinerary(preferences);
      setGeneratedItinerary(result);
      setIsGenerating(false);
      return true;
    } catch (err: any) {
      setIsGenerating(false);
      setGenerationError(err.message || 'An unexpected error occurred during trip generation.');
      return false;
    }
  };

  const retryGeneration = async (): Promise<boolean> => {
    // Disable simulated failure when user clicks retry so it succeeds
    setSimulateGenerationFailure(false);
    return generateTrip();
  };

  const saveCurrentTrip = (): SavedTrip | null => {
    if (!generatedItinerary) return null;
    const saved = storageService.saveTrip(generatedItinerary);
    storageService.markReferenceConfirmed(generatedItinerary.referenceId);
    setSavedTrips(storageService.getSavedTrips());
    return saved;
  };

  const deleteTrip = (id: string) => {
    storageService.deleteTrip(id);
    setSavedTrips(storageService.getSavedTrips());
  };

  const loginDemoUser = (name: string, email: string) => {
    const user = { name, email, isGuest: false };
    setDemoUser(user);
    storageService.setDemoUser(user);
  };

  const continueAsGuest = () => {
    const guestUser = { name: 'Guest Explorer', email: 'guest@smarttourism.guide', isGuest: true };
    setDemoUser(guestUser);
    storageService.setDemoUser(guestUser);
  };

  const logoutDemoUser = () => {
    setDemoUser(null);
    storageService.setDemoUser(null);
  };

  return (
    <TripContext.Provider
      value={{
        preferences,
        updatePreferences,
        resetPreferences,
        generatedItinerary,
        setGeneratedItinerary,
        isGenerating,
        generationStage,
        generationError,
        simulateGenerationFailure,
        setSimulateGenerationFailure,
        generateTrip,
        retryGeneration,
        savedTrips,
        saveCurrentTrip,
        deleteTrip,
        isCurrentTripSaved,
        demoUser,
        loginDemoUser,
        continueAsGuest,
        logoutDemoUser,
        isAuthModalOpen,
        setIsAuthModalOpen
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
};
