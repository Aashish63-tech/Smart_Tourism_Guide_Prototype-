import React, { useState } from 'react';
import {
  Navigation,
  MapPin,
  ExternalLink,
  Compass,
  Route,
  AlertCircle,
  Search,
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { POPULAR_DESTINATIONS, DESTINATION_ATTRACTIONS } from '../data/destinationsData';
import { DemoBadge } from '../components/common/DemoBadge';

export const NavigationPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'goa' | 'jaipur' | 'kerala' | 'delhi'>('mumbai');
  const [customSearch, setCustomSearch] = useState('');

  const cityAttractions = DESTINATION_ATTRACTIONS[selectedCity] || [];

  const handleCustomMapOpen = (service: 'google' | 'osm') => {
    const query = customSearch.trim() || `${selectedCity} landmarks`;
    if (service === 'google') {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
    } else {
      window.open(`https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Navigation className="w-3.5 h-3.5" />
            <span>Map Routing & Landmark Navigation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            GPS Navigation & Mapping Shortcuts
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Launch accurate directions, walking paths, and satellite views for key tourist sites directly through Google Maps and OpenStreetMap.
          </p>
        </div>

        {/* Disclaimer Callout as per Experiment Requirement */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>GPS Navigation Notice:</strong> This prototype provides verified deep-links to external mapping platforms (Google Maps & OpenStreetMap). In accordance with academic guidelines, live device GPS tracking is not simulated without explicit hardware sensor permissions.
          </div>
        </div>

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {POPULAR_DESTINATIONS.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedCity(d.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                selectedCity === d.id
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {d.name} Landmarks
            </button>
          ))}
        </div>

        {/* Custom Place Navigator Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs mb-10">
          <h2 className="text-base font-bold text-navy-900 mb-2 flex items-center gap-2">
            <Search className="w-4 h-4 text-brand-600" />
            <span>Search & Launch Map Route</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder={`e.g. Gateway of India, ${selectedCity}...`}
              value={customSearch}
              onChange={e => setCustomSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-hidden focus:ring-2 focus:ring-brand-500/20"
            />
            <button
              onClick={() => handleCustomMapOpen('google')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleCustomMapOpen('osm')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <span>OpenStreetMap</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Attractions Deep-Link Cards Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-navy-900 font-serif">
            Major Sightseeing Coordinates in {selectedCity}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityAttractions.map((att, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md">
                      {att.category}
                    </span>
                    <span className="text-xs font-bold text-amber-600">★ {att.rating}</span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">{att.name}</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{att.location}</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {att.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${att.name}, ${selectedCity}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
                      `${att.name}, ${selectedCity}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>OSM</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
