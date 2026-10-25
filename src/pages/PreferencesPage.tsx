import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Wallet,
  Check,
  AlertCircle,
  Palmtree,
  Waves,
  Landmark,
  Church,
  Utensils,
  Mountain,
  ShoppingBag,
  Sparkles,
  HeartHandshake,
  Hotel,
  Bus,
  CloudSun,
  Navigation,
  Languages,
  ShieldAlert,
  Info
} from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { WorkflowStepper } from '../components/common/WorkflowStepper';
import { TravelInterest, TravelService } from '../types';
import { POPULAR_DESTINATIONS } from '../data/destinationsData';

export const PreferencesPage: React.FC = () => {
  const navigate = useNavigate();
  const { preferences, updatePreferences } = useTrip();

  const [destination, setDestination] = useState(preferences.destination || 'Mumbai');
  const [durationDays, setDurationDays] = useState(preferences.durationDays || 3);
  const [totalBudget, setTotalBudget] = useState(preferences.totalBudget || 25000);
  const [travellerCount, setTravellerCount] = useState(preferences.travellerCount || 2);
  const [interests, setInterests] = useState<TravelInterest[]>(preferences.interests || []);
  const [services, setServices] = useState<TravelService[]>(preferences.services || []);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const availableInterests: { id: TravelInterest; label: string; icon: any; desc: string }[] = [
    { id: 'Nature', label: 'Nature & Scenery', icon: Palmtree, desc: 'Lush greenery, backwaters, tea gardens & lakes' },
    { id: 'Beaches', label: 'Beaches & Ocean', icon: Waves, desc: 'Golden sands, sunset promenades & water sports' },
    { id: 'Historical Places', label: 'Heritage & Forts', icon: Landmark, desc: 'Ancient palaces, cave temples & UNESCO sites' },
    { id: 'Religious Places', label: 'Spiritual Shrines', icon: Church, desc: 'Sacred temples, historic churches & mosques' },
    { id: 'Food and Culture', label: 'Food & Culture', icon: Utensils, desc: 'Local delicacies, street food & cultural arts' },
    { id: 'Adventure', label: 'Adventure Treks', icon: Mountain, desc: 'Fort hiking, bamboo rafting & jeep safaris' },
    { id: 'Shopping', label: 'Bazaars & Crafts', icon: ShoppingBag, desc: 'Handloom textiles, brassware & souvenir markets' },
    { id: 'Family Activities', label: 'Family & Leisure', icon: HeartHandshake, desc: 'Kid-friendly museums, parks & scenic boat rides' }
  ];

  const availableServices: { id: TravelService; label: string; icon: any; desc: string }[] = [
    { id: 'Tourist attractions', label: 'Tourist Attractions', icon: Landmark, desc: 'Curated daily monuments & sightseeing entry pass estimates' },
    { id: 'Hotels and accommodation', label: 'Hotels & Accommodation', icon: Hotel, desc: 'Suggested stays across Luxury, Mid-range, and Budget tiers' },
    { id: 'Restaurants and local food', label: 'Restaurants & Local Food', icon: Utensils, desc: 'Authentic regional dishes, cost for two, and iconic dining spots' },
    { id: 'Transportation and fare guidance', label: 'Transport & Fares', icon: Bus, desc: 'Metro routes, local trains, auto fares, and taxi estimations' },
    { id: 'Weather information', label: 'Weather Forecast', icon: CloudSun, desc: 'Temperature, humidity advisories, and packing tips' },
    { id: 'GPS navigation', label: 'GPS Navigation Links', icon: Navigation, desc: 'Direct Google Maps & OpenStreetMap navigation shortcuts' },
    { id: 'Voice translation', label: 'Voice & Phrasebook', icon: Languages, desc: 'Bilingual audio translation and regional communication guide' },
    { id: 'Emergency assistance', label: 'Emergency Support', icon: ShieldAlert, desc: 'Direct 112 emergency calling and nearby hospital listings' }
  ];

  const toggleInterest = (id: TravelInterest) => {
    setInterests(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleService = (id: TravelService) => {
    setServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!destination.trim()) {
      errs.destination = 'Please select or enter a destination in India.';
    }

    if (!durationDays || durationDays < 1 || durationDays > 14) {
      errs.durationDays = 'Duration must be between 1 and 14 days.';
    }

    if (!totalBudget || totalBudget <= 0) {
      errs.totalBudget = 'Budget must be a positive number in ₹.';
    } else if (totalBudget < 2000) {
      errs.totalBudget = 'Minimum budget should be at least ₹2,000 for realistic trip estimation.';
    }

    if (!travellerCount || travellerCount < 1) {
      errs.travellerCount = 'Traveller count must be at least 1.';
    }

    if (interests.length === 0) {
      errs.interests = 'Please select at least one travel interest.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }

    updatePreferences({
      destination: destination.trim(),
      durationDays: Number(durationDays),
      totalBudget: Number(totalBudget),
      travellerCount: Number(travellerCount),
      interests,
      services
    });

    navigate('/plan/processing');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Workflow Stepper: Step 1 */}
      <WorkflowStepper currentStep={1} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Screen 2 of 5 — Problem Category & Service Directory</span>
          </div>
          <h1 className="text-3xl font-extrabold text-navy-900 tracking-tight font-serif">
            Plan Your Perfect Trip
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Specify your destination, duration, budget, travel style, and required tourism services. All values are preserved if you navigate backward.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* CARD 1: Core Trip Parameters */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Calendar className="w-5 h-5 text-brand-600" />
              <span>1. Destination, Duration & Budget</span>
            </h2>

            {/* Destination Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Destination (India) <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3">
                {POPULAR_DESTINATIONS.map(d => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => {
                      setDestination(d.name);
                      if (errors.destination) setErrors({ ...errors, destination: '' });
                    }}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1 ${
                      destination.toLowerCase() === d.name.toLowerCase()
                        ? 'border-brand-600 bg-brand-50/80 text-brand-800 ring-2 ring-brand-500/20 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{d.name}</span>
                    <span className="text-[10px] font-normal text-slate-500">{d.category}</span>
                  </button>
                ))}
              </div>

              {/* Custom Search / Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Or enter other Indian destination (e.g. Varanasi, Agra, Manali)..."
                  value={destination}
                  onChange={e => {
                    setDestination(e.target.value);
                    if (errors.destination) setErrors({ ...errors, destination: '' });
                  }}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border ${
                    errors.destination ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-brand-600'
                  } focus:outline-hidden focus:ring-2 focus:ring-brand-500/20`}
                />
              </div>
              {errors.destination && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.destination}
                </p>
              )}
            </div>

            {/* Duration & Travellers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Duration (1-14 Days) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Trip Duration <span className="text-red-500">*</span>
                  </label>
                  <span className="text-sm font-extrabold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-lg border border-brand-200">
                    {durationDays} {durationDays === 1 ? 'Day' : 'Days'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  step="1"
                  value={durationDays}
                  onChange={e => {
                    setDurationDays(Number(e.target.value));
                    if (errors.durationDays) setErrors({ ...errors, durationDays: '' });
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>1 Day (Express)</span>
                  <span>7 Days (Week)</span>
                  <span>14 Days (Extended)</span>
                </div>
                {errors.durationDays && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.durationDays}
                  </p>
                )}
              </div>

              {/* Number of Travellers */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Number of Travellers <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => setTravellerCount(Math.max(1, travellerCount - 1))}
                      className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-extrabold text-slate-800">
                      {travellerCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravellerCount(Math.min(10, travellerCount + 1))}
                      className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{travellerCount === 1 ? 'Solo Adventurer' : travellerCount === 2 ? 'Couple / Pair' : `${travellerCount} Persons Group`}</span>
                  </span>
                </div>
                {errors.travellerCount && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.travellerCount}
                  </p>
                )}
              </div>
            </div>

            {/* Total Budget in ₹ */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Total Budget in Indian Rupees (₹) <span className="text-red-500">*</span>
              </label>

              {/* Preset Budget Chips */}
              <div className="flex flex-wrap gap-2 mb-3">
                {[15000, 25000, 40000, 65000, 100000].map(amt => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setTotalBudget(amt);
                      if (errors.totalBudget) setErrors({ ...errors, totalBudget: '' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      totalBudget === amt
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              <div className="relative max-w-sm">
                <span className="absolute left-3.5 top-2.5 text-base font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  min="1000"
                  step="500"
                  placeholder="Enter total budget amount"
                  value={totalBudget}
                  onChange={e => {
                    setTotalBudget(Number(e.target.value));
                    if (errors.totalBudget) setErrors({ ...errors, totalBudget: '' });
                  }}
                  className={`w-full pl-8 pr-4 py-2.5 text-sm font-semibold rounded-xl border ${
                    errors.totalBudget ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-brand-600'
                  } focus:outline-hidden focus:ring-2 focus:ring-brand-500/20`}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5">
                Note: In Screen 4, your actual estimated expenses will be compared against this budget, showing a warning if estimated costs exceed this amount.
              </p>
              {errors.totalBudget && (
                <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.totalBudget}
                </p>
              )}
            </div>
          </div>

          {/* CARD 2: Travel Interests */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-600" />
                  <span>2. Select Travel Interests</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Choose the travel experiences that fit your style.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                {interests.length} Selected
              </span>
            </div>

            {errors.interests && (
              <p className="text-red-500 text-xs flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.interests}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {availableInterests.map(item => {
                const Icon = item.icon;
                const isSelected = interests.includes(item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleInterest(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-brand-600 bg-brand-50/80 text-brand-900 shadow-xs ring-2 ring-brand-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-colors ${
                          isSelected ? 'bg-brand-600 text-white' : 'border border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs">{item.label}</div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CARD 3: Travel Services Selection */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-brand-600" />
                  <span>3. Optional Travel Services Directory</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select which modules to include in your personalized trip package.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                {services.length} Enabled
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableServices.map(srv => {
                const Icon = srv.icon;
                const isSelected = services.includes(srv.id);

                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-emerald-500/80 bg-emerald-50/40 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 mt-0.5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                        <Icon className="w-3.5 h-3.5 text-brand-600" />
                        <span>{srv.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Generate My Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
