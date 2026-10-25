import React, { useState } from 'react';
import {
  Hotel,
  Utensils,
  Star,
  MapPin,
  Check,
  Sparkles,
  Info,
  DollarSign
} from 'lucide-react';
import { HOTELS_CATALOG, RESTAURANTS_CATALOG, POPULAR_DESTINATIONS } from '../data/destinationsData';
import { DemoBadge } from '../components/common/DemoBadge';

export const AccommodationsPage: React.FC = () => {
  const [activeCity, setActiveCity] = useState<'mumbai' | 'goa' | 'jaipur' | 'kerala' | 'delhi'>('mumbai');
  const [activeTab, setActiveTab] = useState<'hotels' | 'restaurants'>('hotels');

  const hotels = HOTELS_CATALOG[activeCity] || [];
  const restaurants = RESTAURANTS_CATALOG[activeCity] || [];

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Hotel className="w-3.5 h-3.5" />
            <span>Hospitality & Culinary Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            Hotels, Resorts & Local Dining
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Explore curated accommodations from budget hostels to luxury palaces, alongside authentic regional culinary landmarks.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {POPULAR_DESTINATIONS.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveCity(d.id as any)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                activeCity === d.id
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Tab Switcher: Hotels vs Restaurants */}
        <div className="flex border-b border-slate-200 mb-8 bg-white rounded-2xl p-1.5 max-w-sm shadow-xs">
          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'hotels'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Hotel className="w-4 h-4" />
            <span>Hotels & Stays</span>
          </button>
          <button
            onClick={() => setActiveTab('restaurants')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'restaurants'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Local Restaurants</span>
          </button>
        </div>

        {/* HOTELS VIEW */}
        {activeTab === 'hotels' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-navy-900 font-serif capitalize">
                Recommended Stays in {activeCity}
              </h2>
              <DemoBadge label="Curated Demo Catalog" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotels.map(h => (
                <div
                  key={h.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={h.image}
                        alt={h.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-navy-900 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {h.tier}
                      </div>
                      <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur-xs text-amber-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-300" />
                        <span>{h.rating}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-base font-bold text-navy-900">{h.name}</h3>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{h.location}</span>
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {h.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Amenities:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {h.amenities.map((am: string, i: number) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                            >
                              {am}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        Estimated Tariff
                      </span>
                      <strong className="text-base font-extrabold text-navy-900">
                        ₹{h.pricePerNight.toLocaleString('en-IN')}{' '}
                        <span className="text-xs font-normal text-slate-500">/ night</span>
                      </strong>
                    </div>

                    <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg">
                      Demo Listing
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESTAURANTS VIEW */}
        {activeTab === 'restaurants' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-navy-900 font-serif capitalize">
                Must-Try Restaurants & Food in {activeCity}
              </h2>
              <DemoBadge label="Curated Demo Catalog" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {restaurants.map(r => (
                <div
                  key={r.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-navy-900 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {r.cuisine}
                      </div>
                      <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur-xs text-amber-300 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-300" />
                        <span>{r.rating}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-base font-bold text-navy-900">{r.name}</h3>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{r.location}</span>
                        </p>
                      </div>

                      <div className="p-3 bg-orange-50/60 rounded-xl border border-orange-100 text-xs">
                        <strong className="text-orange-950 block font-semibold mb-0.5">
                          Signature Specialty:
                        </strong>
                        <span className="text-orange-900">{r.specialty}</span>
                      </div>

                      <p className="text-xs text-slate-500 italic">
                        Ambiance: {r.ambiance}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                        Cost for Two
                      </span>
                      <strong className="text-base font-extrabold text-navy-900">
                        ₹{r.avgCostForTwo.toLocaleString('en-IN')}
                      </strong>
                    </div>

                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      Authentic Local
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer Note */}
        <div className="mt-12 p-4 bg-slate-100/80 rounded-2xl border border-slate-200 text-xs text-slate-500 text-center">
          Prototype demonstration catalog. Stays and restaurants reflect realistic local pricing without live reservation transactions.
        </div>
      </div>
    </div>
  );
};
