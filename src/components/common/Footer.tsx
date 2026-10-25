import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldAlert, Phone, Heart, ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800 text-sm mt-auto">
      {/* Top emergency strip */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-950 border-b border-red-900/40 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2 text-red-300">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
            <span className="font-semibold">National Emergency Support (India):</span>
            <span>Dial 112 for immediate unified Police, Medical & Fire response.</span>
          </div>
          <a
            href="tel:112"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold transition-colors"
          >
            <Phone className="w-3 h-3" />
            <span>Call 112</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-teal-400 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-serif">
                Smart Tourism Guide
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              An intelligent, responsive web prototype designed for Indian travelers. Generates personalized day-wise itineraries, balanced expense forecasts, accommodation picks, transit advisories, and emergency support.
            </p>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400">
              <p className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span>College Mini-Project Experiment Prototype</span>
              </p>
              <p className="mt-1 text-[11px]">
                Built with React, Vite, TypeScript, and Tailwind CSS. All itineraries, prices, and reference codes are simulated locally without third-party billing.
              </p>
            </div>
          </div>

          {/* Workflow Pages */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Workflow Screens
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  1. Landing & Discovery
                </Link>
              </li>
              <li>
                <Link to="/plan/preferences" className="text-slate-400 hover:text-white transition-colors">
                  2. Trip Preferences & Services
                </Link>
              </li>
              <li>
                <Link to="/plan/processing" className="text-slate-400 hover:text-white transition-colors">
                  3. Input Review & Processing
                </Link>
              </li>
              <li>
                <Link to="/plan/review" className="text-slate-400 hover:text-white transition-colors">
                  4. Itinerary Verification
                </Link>
              </li>
              <li>
                <Link to="/plan/confirmation" className="text-slate-400 hover:text-white transition-colors">
                  5. Trip Confirmation & Ticket
                </Link>
              </li>
              <li>
                <Link to="/my-trips" className="text-brand-400 hover:text-brand-300 font-semibold transition-colors">
                  📁 Saved Trips (localStorage)
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Tools */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Travel Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/destinations" className="text-slate-400 hover:text-white transition-colors">
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link to="/transport" className="text-slate-400 hover:text-white transition-colors">
                  Transport & Fare Calculator
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-slate-400 hover:text-white transition-colors">
                  Hotels & Local Restaurants
                </Link>
              </li>
              <li>
                <Link to="/weather" className="text-slate-400 hover:text-white transition-colors">
                  Destination Weather Hub
                </Link>
              </li>
              <li>
                <Link to="/navigation" className="text-slate-400 hover:text-white transition-colors">
                  GPS Navigation & Maps
                </Link>
              </li>
              <li>
                <Link to="/translate" className="text-slate-400 hover:text-white transition-colors">
                  Voice & Phrase Translation
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-red-400 hover:text-red-300 font-semibold transition-colors">
                  Emergency Support (112)
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Featured Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/destinations?id=mumbai" className="text-slate-400 hover:text-white transition-colors">
                  Mumbai — Maharashtra
                </Link>
              </li>
              <li>
                <Link to="/destinations?id=goa" className="text-slate-400 hover:text-white transition-colors">
                  Goa — Golden Coast
                </Link>
              </li>
              <li>
                <Link to="/destinations?id=jaipur" className="text-slate-400 hover:text-white transition-colors">
                  Jaipur — The Pink City
                </Link>
              </li>
              <li>
                <Link to="/destinations?id=kerala" className="text-slate-400 hover:text-white transition-colors">
                  Kerala — God’s Own Country
                </Link>
              </li>
              <li>
                <Link to="/destinations?id=delhi" className="text-slate-400 hover:text-white transition-colors">
                  Delhi — Historic Capital
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Smart Tourism Guide — College SE Mini-Project Prototype.
          </p>
          <p className="text-[11px] text-slate-400">
            Simulated demonstration data • All prices in Indian Rupees (₹) • Responsive Web App
          </p>
        </div>
      </div>
    </footer>
  );
};
