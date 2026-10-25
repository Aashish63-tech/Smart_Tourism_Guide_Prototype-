import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Wallet,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Compass,
  Building,
  Palmtree,
  Waves
} from 'lucide-react';
import { POPULAR_DESTINATIONS, DESTINATION_ATTRACTIONS } from '../data/destinationsData';
import { useTrip } from '../context/TripContext';
import { DemoBadge } from '../components/common/DemoBadge';

export const ExploreDestinationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSelected = searchParams.get('id') || '';

  const { updatePreferences } = useTrip();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Metro', 'Beaches', 'Heritage', 'Nature & Backwaters'];

  const filteredDestinations = POPULAR_DESTINATIONS.filter(d => {
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handlePlanHere = (destName: string) => {
    updatePreferences({ destination: destName });
    navigate('/plan/preferences');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Indian Tourism Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            Explore Iconic Indian Destinations
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Browse through top tourist hubs across Maharashtra, Goa, Rajasthan, Kerala, and Delhi. Select any city to immediately launch your personalized itinerary workflow.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search destination, state, or vibe..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-hidden focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(dest => {
            const attractions = DESTINATION_ATTRACTIONS[dest.id] || [];

            return (
              <div
                key={dest.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-navy-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                      {dest.category}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-semibold text-brand-300 block">
                        {dest.state}
                      </span>
                      <h3 className="text-xl font-bold font-serif">{dest.name}</h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                          Recommended
                        </span>
                        <strong className="text-navy-900">{dest.recommendedDays} Days</strong>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                          Daily Budget
                        </span>
                        <strong className="text-emerald-700">₹{dest.typicalDailyBudget}/day</strong>
                      </div>
                    </div>

                    {/* Popular Attractions Chips */}
                    <div>
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                        Key Attractions:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.popularAttractions.slice(0, 4).map((att, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                          >
                            {att}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Weather preview */}
                    <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/50 text-xs text-amber-900">
                      <strong>Climate:</strong> {dest.weatherBrief}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handlePlanHere(dest.name)}
                    className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>Plan a Trip Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
