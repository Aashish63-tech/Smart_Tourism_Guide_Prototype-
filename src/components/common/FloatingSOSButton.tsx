import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  Phone,
  X,
  AlertTriangle,
  Hospital,
  ShieldCheck,
  HeartPulse,
  ExternalLink,
  Info
} from 'lucide-react';
import { NATIONAL_EMERGENCY_NUMBERS } from '../../data/emergencyData';

export const FloatingSOSButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FLOATING CIRCULAR SOS BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-red-600 via-rose-600 to-red-500 hover:from-red-700 hover:to-rose-700 text-white shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center focus:outline-hidden focus:ring-4 focus:ring-red-400/50 cursor-pointer"
          title="Emergency Assistance (SOS)"
          aria-label="Emergency Assistance (SOS)"
        >
          {/* Subtle Outer Ping Pulse */}
          <span className="absolute -inset-1 rounded-full bg-red-500/30 animate-ping pointer-events-none" />

          {/* Icon & SOS Text */}
          <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4] mb-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] sm:text-[11px] font-black tracking-wider uppercase leading-none">
            SOS
          </span>
        </button>
      </div>

      {/* SOS EMERGENCY MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl border border-red-200 max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 p-6 text-white relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif leading-tight">
                    Emergency Assistance (India)
                  </h3>
                  <p className="text-xs text-red-100">
                    Unified response helplines & medical guidance
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close emergency modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-700">
              {/* PRIMARY 112 NATIONAL HELPLINE BANNER */}
              <div className="bg-red-50 rounded-2xl border-2 border-red-300 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-md">
                    National Emergency Number
                  </span>
                  <div className="text-3xl font-extrabold text-red-700 font-mono">
                    112
                  </div>
                  <p className="text-xs text-red-900 leading-snug">
                    Unified 24x7 all-India response for Police, Fire, Ambulance & Disaster emergencies.
                  </p>
                </div>

                <a
                  href="tel:112"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call 112</span>
                </a>
              </div>

              {/* Other Critical Helplines */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Direct National Helplines
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy-900">Police</div>
                      <div className="text-[11px] text-slate-500">Law & Order</div>
                    </div>
                    <a
                      href="tel:100"
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-bold font-mono text-xs"
                    >
                      100
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy-900">Ambulance</div>
                      <div className="text-[11px] text-slate-500">Medical (EMRI)</div>
                    </div>
                    <a
                      href="tel:108"
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-bold font-mono text-xs"
                    >
                      108
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy-900">Tourist Help</div>
                      <div className="text-[11px] text-slate-500">Incredible India</div>
                    </div>
                    <a
                      href="tel:1363"
                      className="px-2.5 py-1 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold font-mono text-xs"
                    >
                      1363
                    </a>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy-900">Women Helpline</div>
                      <div className="text-[11px] text-slate-500">24x7 Safety</div>
                    </div>
                    <a
                      href="tel:1091"
                      className="px-2.5 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-lg font-bold font-mono text-xs"
                    >
                      1091
                    </a>
                  </div>
                </div>
              </div>

              {/* Guidance for Medical & Police */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-bold text-navy-900 flex items-center gap-1.5">
                  <Hospital className="w-3.5 h-3.5 text-red-600" />
                  <span>Nearby Hospital & Police Station Support</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  For municipal government super-speciality hospitals (e.g. KEM & Lilavati in Mumbai, GMC in Goa, SMS in Jaipur, Ernakulam General in Kerala, AIIMS in Delhi), visit our dedicated Emergency page.
                </p>
                <div className="pt-1">
                  <Link
                    to="/emergency"
                    onClick={() => setIsOpen(false)}
                    className="text-brand-700 hover:text-brand-800 font-bold inline-flex items-center gap-1"
                  >
                    <span>View Complete City Hospital Directory</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Crucial Academic Notice */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Safety Notice:</strong> This prototype displays verified official helplines in India. Clicking call buttons launches your phone dialer. It does <em>not</em> place automated calls or contact emergency services on your behalf.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-slate-300 hover:bg-white text-slate-700 rounded-xl text-xs font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
