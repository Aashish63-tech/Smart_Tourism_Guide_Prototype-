import React, { useState } from 'react';
import {
  CloudSun,
  Sun,
  Droplets,
  Wind,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Shirt,
  Sparkles,
  Info
} from 'lucide-react';
import { WEATHER_CATALOG, POPULAR_DESTINATIONS } from '../data/destinationsData';
import { DemoBadge } from '../components/common/DemoBadge';

export const WeatherPage: React.FC = () => {
  const [cityKey, setCityKey] = useState<'mumbai' | 'goa' | 'jaipur' | 'kerala' | 'delhi'>('mumbai');

  const weather = WEATHER_CATALOG[cityKey] || WEATHER_CATALOG['mumbai'];
  const destination = POPULAR_DESTINATIONS.find(d => d.id === cityKey);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-2">
            <CloudSun className="w-3.5 h-3.5 text-amber-600" />
            <span>Regional Meteorological Advisory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            Destination Weather & Packing Tips
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Seasonal climate conditions, humidity rates, best visiting windows, and tailored luggage packing checklists for Indian tourism.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {POPULAR_DESTINATIONS.map(d => (
            <button
              key={d.id}
              onClick={() => setCityKey(d.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                cityKey === d.id
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-500/25'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {d.name} Climate
            </button>
          ))}
        </div>

        {/* MAIN WEATHER CARD */}
        <div className="bg-gradient-to-br from-navy-900 via-slate-900 to-navy-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-8 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  {destination?.state}
                </span>
                <span className="text-white/40">•</span>
                <DemoBadge label="Simulated Weather Model" className="bg-white/10 text-white border-white/20" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-serif">
                {destination?.name} Current Forecast
              </h2>

              <p className="text-sm text-slate-300">
                {weather.condition}
              </p>

              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-xs text-slate-200">
                <strong className="text-amber-300 block mb-1">Seasonal Advisory:</strong>
                <span>{weather.advisory}</span>
              </div>
            </div>

            {/* Weather Gauges */}
            <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Sun className="w-12 h-12 text-amber-400 animate-spin-slow" />
                <span className="text-5xl font-extrabold font-mono text-white">
                  {weather.tempCelsius}°C
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-white/10">
                <div className="p-2 rounded-xl bg-black/20">
                  <span className="text-[10px] text-slate-400 block uppercase">Humidity</span>
                  <strong className="text-brand-300">{weather.humidityPercent}%</strong>
                </div>
                <div className="p-2 rounded-xl bg-black/20">
                  <span className="text-[10px] text-slate-400 block uppercase">Best Season</span>
                  <strong className="text-amber-300">Nov - Feb</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RECOMMENDATIONS & PACKING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-600" />
              <span>Optimal Travel Season</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Recommended Period:</strong> {weather.bestSeason}. 
              During these months, ambient temperatures remain pleasant for outdoor walking, heritage forts exploration, and seaside strolls.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Shirt className="w-5 h-5 text-emerald-600" />
              <span>Packing & Attire Guidance</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Clothing Tip:</strong> {weather.clothingTip}. 
              Don't forget sunblock SPF 50+, sunglasses, a refillable water bottle, and modest clothing if visiting religious shrines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
