import React, { useState } from 'react';
import {
  Bus,
  Train,
  Car,
  Navigation,
  Calculator,
  Info,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { CITY_TRANSPORT_GUIDES } from '../data/transportData';
import { DemoBadge } from '../components/common/DemoBadge';

export const TransportPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'goa' | 'jaipur' | 'kerala' | 'delhi'>('mumbai');
  const [calcModeIndex, setCalcModeIndex] = useState<number>(0);
  const [calcDistanceKm, setCalcDistanceKm] = useState<number>(12);

  const cityGuide = CITY_TRANSPORT_GUIDES[selectedCity];
  const activeMode = cityGuide.modes[calcModeIndex] || cityGuide.modes[0];

  // Calculate fare: baseFare + (distance * perKmRate)
  const estimatedFare = Math.round(
    activeMode.baseFare + Math.max(0, calcDistanceKm - 1.5) * activeMode.perKmRate
  );

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Bus className="w-3.5 h-3.5" />
            <span>Indian City Transit Guidance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            Transportation Options & Fare Estimator
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Comprehensive guide to suburban trains, metros, auto-rickshaws, and app-based cabs across major Indian cities, complete with an interactive fare calculator.
          </p>
        </div>

        {/* City Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {Object.entries(CITY_TRANSPORT_GUIDES).map(([key, val]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCity(key as any);
                setCalcModeIndex(0);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                selectedCity === key
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {val.city} Guide
            </button>
          ))}
        </div>

        {/* INTERACTIVE FARE CALCULATOR WIDGET */}
        <div className="bg-gradient-to-br from-navy-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-10 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Fare Estimator (INR ₹)</span>
              </div>
              <h2 className="text-2xl font-bold font-serif">
                Calculate Transit Cost in {cityGuide.city}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-lg">
                Choose your travel mode and estimate the commute cost according to official municipal base meters and per-kilometer tariffs.
              </p>

              {/* Mode Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wider">
                  Select Mode of Transport:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {cityGuide.modes.map((m, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCalcModeIndex(idx)}
                      className={`p-2 rounded-xl text-xs font-bold text-left transition-all border ${
                        calcModeIndex === idx
                          ? 'bg-brand-600 border-brand-400 text-white shadow-xs'
                          : 'bg-white/10 hover:bg-white/15 border-white/10 text-slate-200'
                      }`}
                    >
                      <div className="truncate">{m.name.split('(')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Distance Slider */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300 font-semibold">Travel Distance:</span>
                  <span className="text-sm font-extrabold text-brand-300">
                    {calcDistanceKm} Kilometers
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={calcDistanceKm}
                  onChange={e => setCalcDistanceKm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 km (Local Hop)</span>
                  <span>25 km (Cross City)</span>
                  <span>50 km (Airport / Outskirts)</span>
                </div>
              </div>
            </div>

            {/* Calculated Fare Output Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 block">
                Estimated Commute Fare
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-brand-300 font-mono">
                ₹{estimatedFare.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <p>
                  <strong>Mode:</strong> {activeMode.name}
                </p>
                <p>
                  <strong>Base Minimum:</strong> ₹{activeMode.baseFare} • <strong>Tariff:</strong> ₹{activeMode.perKmRate}/km
                </p>
              </div>
              <div className="p-2.5 bg-black/20 rounded-xl text-[11px] text-slate-400">
                Illustrative sample calculation. Real-world surge, tolls, and peak meter rates vary.
              </div>
            </div>
          </div>
        </div>

        {/* Transport Modes Detailed Catalog */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-navy-900 font-serif">
              Available Modes of Transport in {cityGuide.city}
            </h3>
            <DemoBadge label="City Fare Rules" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityGuide.modes.map((mode, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                    <Bus className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-navy-900">{mode.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{mode.description}</p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                    <strong className="text-navy-900 block mb-0.5">Recommended For:</strong>
                    <span>{mode.recommendedFor}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Base Fare: ₹{mode.baseFare}</span>
                  <span className="font-bold text-brand-700">₹{mode.perKmRate}/km</span>
                </div>
              </div>
            ))}
          </div>

          {/* Local Tip Box */}
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-xs text-teal-950 flex items-start gap-3">
            <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Local Transit Pro-Tip for {cityGuide.city}:</strong>{' '}
              <span>{cityGuide.localTip}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
