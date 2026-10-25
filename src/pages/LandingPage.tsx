import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  ShieldCheck,
  Wallet,
  CloudSun,
  Languages,
  PhoneCall,
  CheckCircle2,
  Clock,
  Star,
  Luggage,
  Users
} from 'lucide-react';
import { POPULAR_DESTINATIONS } from '../data/destinationsData';
import { useTrip } from '../context/TripContext';
import { DemoBadge } from '../components/common/DemoBadge';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { updatePreferences, continueAsGuest, setIsAuthModalOpen, demoUser } = useTrip();

  const handlePlanMyTrip = () => {
    navigate('/plan/preferences');
  };

  const handlePrefillDestination = (destName: string) => {
    updatePreferences({ destination: destName });
    navigate('/plan/preferences');
  };

  const handleGuestPlan = () => {
    continueAsGuest();
    navigate('/plan/preferences');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-slate-50 to-white pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-200/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/80 border border-brand-200/80 text-brand-800 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
                <span>AI-Assisted Indian Travel Itinerary Engine</span>
                <span className="bg-brand-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full">
                  Demo
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Your Journey, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-teal-500">
                  Planned Smarter.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Generate personalized day-wise travel itineraries across India based on your exact budget, days, group size, and interests. Get realistic cost estimations, verified transit guidance, hotel and dining recommendations, and round-the-clock emergency assistance.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  id="hero-plan-btn"
                  onClick={handlePlanMyTrip}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-700 to-teal-700 hover:from-brand-700 hover:to-teal-800 text-white font-bold text-base shadow-lg shadow-brand-600/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-amber-200" />
                  <span>Plan My Trip</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#destinations"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 hover:border-brand-500 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Compass className="w-4 h-4 text-brand-600" />
                  <span>Explore Destinations</span>
                </a>
              </div>

              {/* Quick Guest / Demo Auth Options */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-slate-500">
                <button
                  onClick={handlePlanMyTrip}
                  className="hover:text-brand-700 font-semibold text-brand-700 cursor-pointer flex items-center gap-1"
                >
                  <span>✨ Start Planning Trip</span>
                </button>
                <span>•</span>
                {demoUser ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Logged in as {demoUser.name}</span>
                  </span>
                ) : (
                  <button
                    onClick={() => navigate('/login')}
                    className="hover:text-brand-700 underline font-medium cursor-pointer"
                  >
                    🔑 Account Login
                  </button>
                )}
                <span>•</span>
                <span className="text-slate-400">Indian Tourism Explorer</span>
              </div>

              {/* Trust & Metric Chips */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
                <div className="bg-white/80 p-3 rounded-xl border border-slate-200/60 shadow-xs text-center">
                  <div className="text-xl font-extrabold text-navy-900">5+</div>
                  <div className="text-[11px] text-slate-500 font-medium">Top Destinations</div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-slate-200/60 shadow-xs text-center">
                  <div className="text-xl font-extrabold text-brand-600">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">Cost Transparency</div>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-slate-200/60 shadow-xs text-center">
                  <div className="text-xl font-extrabold text-emerald-600">24x7</div>
                  <div className="text-[11px] text-slate-500 font-medium">112 Helpline Info</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80"
                  alt="Mumbai Gateway of India Taj Mahal Palace"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/20 to-transparent" />

                {/* Floating Floating Itinerary Widget on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      Smart Trip Generator
                    </span>
                    <DemoBadge label="Interactive Prototype" />
                  </div>
                  <div className="text-sm font-bold text-navy-900">
                    Mumbai Coastal Heritage Tour (3 Days)
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 mt-2 pt-2 border-t border-slate-100">
                    <span>Est. Budget: ₹18,500</span>
                    <span className="text-emerald-700 font-semibold">Gateway • Marine Drive • Elephanta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS SECTION */}
      <section id="destinations" className="py-16 bg-white border-y border-slate-200/60 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Featured Indian Destinations
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-serif">
                Explore Top Travel Hotspots
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Select any iconic Indian destination to immediately prefill your customized itinerary.
              </p>
            </div>
            <button
              onClick={() => navigate('/destinations')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800 hover:underline"
            >
              <span>View All Destination Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {POPULAR_DESTINATIONS.map(dest => (
              <div
                key={dest.id}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:border-brand-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-navy-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {dest.category}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-700 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{dest.state}</p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                      <span>Avg. Budget:</span>
                      <strong className="text-slate-900">₹{dest.typicalDailyBudget}/day</strong>
                    </div>

                    <button
                      onClick={() => handlePrefillDestination(dest.name)}
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-brand-600 text-brand-700 hover:text-white border border-brand-200 hover:border-transparent font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Plan a Trip Here</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES HIGHLIGHTS */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Why Smart Tourism Guide?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-serif mt-2">
              All Travel Planning Services in One Place
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything required for a hassle-free trip across India, completely integrated into a 5-step workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">
                AI Day-Wise Itineraries
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deterministic algorithmic planning that schedules Morning, Afternoon, and Evening activities customized to your interests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">
                Transparent Budgeting (₹)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Real-time expense breakdowns across transit, food, monuments, and stays with automated over-budget warnings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <CloudSun className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">
                Weather & Packing Advice
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Destination climate conditions, humidity, seasonal travel advisories, and tailored packing recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">
                Emergency 112 & Safety
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant one-tap national emergency dispatch (112), tourist police contacts, and city super-speciality hospital links.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

