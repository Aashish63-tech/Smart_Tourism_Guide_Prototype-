import React, { useState } from 'react';
import {
  ShieldAlert,
  Phone,
  Hospital,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  HeartPulse,
  Info,
  ExternalLink,
  MapPin,
  Clock,
  Building2
} from 'lucide-react';
import {
  NATIONAL_EMERGENCY_NUMBERS,
  CITY_EMERGENCY_DIRECTORIES
} from '../data/emergencyData';
import { DemoBadge } from '../components/common/DemoBadge';

export const EmergencyPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'goa' | 'jaipur' | 'kerala' | 'delhi'>('mumbai');

  const cityDirectory = CITY_EMERGENCY_DIRECTORIES[selectedCity];

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
            <span>24x7 Safety & Emergency Response</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            Emergency Assistance & Medical Directory
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Verified Indian emergency hotlines, tourist police detachments, and trauma super-speciality hospitals for immediate traveler support.
          </p>
        </div>

        {/* Academic Prototype Safety Notice */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Important Safety Notice:</strong> This directory displays real national and municipal helpline numbers in India. Clicking the call buttons initiates a device phone dialer. This web prototype does not claim to dispatch or contact emergency personnel automatically. In a real life-threatening emergency, dial <strong>112</strong> immediately.
          </div>
        </div>

        {/* NATIONAL UNIFIED 112 HERO CALLOUT */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider font-extrabold bg-white/20 px-3 py-1 rounded-full">
              National Emergency Response (All India)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
              Dial 112 (ERSS India)
            </h2>
            <p className="text-xs sm:text-sm text-red-100 max-w-lg leading-relaxed">
              India's unified emergency helpline for instant Police, Ambulance, Fire, and Disaster rescue dispatch. Toll-free 24/7 across all states and union territories.
            </p>
          </div>

          <a
            href="tel:112"
            className="px-8 py-4 rounded-2xl bg-white text-red-700 hover:bg-red-50 font-extrabold text-base shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0"
          >
            <Phone className="w-5 h-5 fill-red-600" />
            <span>Call 112 Now</span>
          </a>
        </div>

        {/* NATIONWIDE ESSENTIAL HELPLINES */}
        <div className="space-y-4 mb-12">
          <h3 className="text-xl font-bold text-navy-900 font-serif">
            Nationwide Tourism & Safety Helplines
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {NATIONAL_EMERGENCY_NUMBERS.map(item => (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  item.isPrimary
                    ? 'bg-red-50/50 border-red-200'
                    : 'bg-white border-slate-200/80 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <strong className="text-base font-extrabold text-red-600 font-mono">
                      {item.number}
                    </strong>
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{item.coverage}</span>
                  <a
                    href={`tel:${item.number}`}
                    className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Dial</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CITY SPECIFIC EMERGENCY HOSPITALS & TOURIST POLICE */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-navy-900 font-serif">
                City Hospitals & Tourist Police Directory
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Select city for government super-speciality trauma centers and tourist protection units.
              </p>
            </div>

            {/* City Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {Object.keys(CITY_EMERGENCY_DIRECTORIES).map(k => (
                <button
                  key={k}
                  onClick={() => setSelectedCity(k as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize shrink-0 transition-all ${
                    selectedCity === k
                      ? 'bg-navy-900 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Tourist Police Callout */}
            <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900 block font-bold text-sm">
                    {cityDirectory.touristPolice}
                  </strong>
                  <span className="text-slate-600">
                    Dedicated patrol unit assisting international & domestic travelers with safety and dispute resolution.
                  </span>
                </div>
              </div>

              <a
                href={`tel:${cityDirectory.touristPolicePhone}`}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {cityDirectory.touristPolicePhone}</span>
              </a>
            </div>

            {/* Hospitals Grid */}
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Top Super-Speciality & 24/7 Trauma Hospitals in {cityDirectory.city}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cityDirectory.topHospitals.map((hosp, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        {hosp.type}
                      </span>
                      <h5 className="text-sm font-bold text-navy-900 pt-1">{hosp.name}</h5>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{hosp.location}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-700">{hosp.phone}</span>
                      <a
                        href={`tel:${hosp.phone}`}
                        className="text-brand-700 hover:text-brand-800 text-xs font-bold flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call Hospital</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pharmacy & Blood Bank row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  24/7 Pharmacy / Chemists:
                </span>
                <span className="font-semibold text-slate-800">{cityDirectory.chemists24x7}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
                  Emergency Blood Bank:
                </span>
                <span className="font-semibold text-slate-800">{cityDirectory.bloodBankPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
