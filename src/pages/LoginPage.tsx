import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Compass,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Palmtree,
  Wallet,
  Clock
} from 'lucide-react';
import { useTrip } from '../context/TripContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginDemoUser, continueAsGuest } = useTrip();

  // Redirect destination if user was trying to go somewhere specific
  const from = (location.state as any)?.from?.pathname || '/';

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (isSignUp && !name.trim()) {
      errs.name = 'Full name is required';
    }

    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Enter a valid email address';
    }

    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }

    if (isSignUp) {
      if (!confirmPassword) {
        errs.confirmPassword = 'Confirm your password';
      } else if (confirmPassword !== password) {
        errs.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const displayName = isSignUp ? name.trim() : (email.split('@')[0] || 'Traveler');
    loginDemoUser(displayName, email.trim());

    setSuccessMessage(`Welcome, ${displayName}! Access granted.`);
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 600);
  };

  const handleGuestEntry = () => {
    continueAsGuest();
    navigate(from, { replace: true });
  };

  const handleQuickFill = () => {
    setName('Aashish Sharma');
    setEmail('aashish.traveler@example.com');
    setPassword('travelPass2026');
    setConfirmPassword('travelPass2026');
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:grid lg:grid-cols-12 selection:bg-brand-500 selection:text-white">
      {/* LEFT COLUMN: HERO BRANDING & TRAVEL PHOTOGRAPHY (Desktop 5-6 cols) */}
      <div className="lg:col-span-5 xl:col-span-6 relative bg-navy-950 text-white flex flex-col justify-between p-8 sm:p-12 overflow-hidden min-h-[320px] lg:min-h-screen">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=80"
            alt="Mumbai Heritage Waterfront"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-navy-950/60" />
        </div>

        {/* Top Logo & Tagline */}
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight font-serif block text-white">
                Smart Tourism Guide
              </span>
              <span className="text-xs text-brand-300 font-medium">
                Your Journey, Planned Smarter.
              </span>
            </div>
          </div>
        </div>

        {/* Center Headline & Features (Visible on large screens) */}
        <div className="relative z-10 my-auto py-8 hidden lg:block space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI-Assisted Indian Travel Itinerary Planner</span>
          </div>

          <h1 className="text-3xl xl:text-4xl font-extrabold text-white font-serif leading-tight">
            Discover India with confidence, clarity, and precision.
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md">
            Plan customized day-wise itineraries for Mumbai, Goa, Jaipur, Kerala, and Delhi with realistic budgets in ₹, curated hotels, local dining, transit fares, and emergency assistance.
          </p>

          <div className="space-y-3 pt-2 text-xs text-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Day-wise attraction schedules tailored to your pace</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Complete expense forecasting with over-budget alerts</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span>Integrated National 112 emergency and medical guidance</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>College SE Mini-Project</span>
          <span>Indian Destinations in INR (₹)</span>
        </div>
      </div>

      {/* RIGHT COLUMN: LOGIN / SIGN UP FORM (Desktop 7-6 cols) */}
      <div className="lg:col-span-7 xl:col-span-6 flex items-center justify-center p-6 sm:p-10 lg:p-14">
        <div className="w-full max-w-md space-y-6">
          {/* Header text */}
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sign In to Continue</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-serif">
              Welcome to Smart Tourism Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Your Journey, Planned Smarter.
            </p>
          </div>

          {/* Tab Switcher: Sign In vs Create Account */}
          <div className="flex p-1 bg-slate-200/70 rounded-2xl">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(false);
                setErrors({});
              }}
              className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                !isSignUp
                  ? 'bg-white text-navy-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSignUp(true);
                setErrors({});
              }}
              className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                isSignUp
                  ? 'bg-white text-navy-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Success Banner */}
          {successMessage && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name for Sign Up */}
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Aashish Sharma"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.name
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-brand-600'
                    } focus:outline-hidden focus:ring-2 focus:ring-brand-500/20`}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>
            )}

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border ${
                    errors.email
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-slate-300 focus:border-brand-600'
                  } focus:outline-hidden focus:ring-2 focus:ring-brand-500/20`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border ${
                    errors.password
                      ? 'border-red-500 bg-red-50/30'
                      : 'border-slate-300 focus:border-brand-600'
                  } focus:outline-hidden focus:ring-2 focus:ring-brand-500/20`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password for Sign Up */}
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className={`w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border ${
                      errors.confirmPassword
                        ? 'border-red-500 bg-red-50/30'
                        : 'border-slate-300 focus:border-brand-600'
                    } focus:outline-hidden focus:ring-2 focus:ring-brand-500/20`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    tabIndex={-1}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Quick Demo Fill Helper */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleQuickFill}
                className="w-full py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Fill Demo Credentials for Testing</span>
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSignUp ? 'Create Demo Account' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-3">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-slate-50 px-3 text-xs text-slate-400 uppercase font-bold tracking-wider absolute">
                or
              </span>
            </div>

            {/* Continue as Guest Button */}
            <button
              type="button"
              onClick={handleGuestEntry}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>Continue as Guest (No Account Required)</span>
            </button>
          </form>

          {/* Academic Demo Disclaimer */}
          <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-500 text-center leading-relaxed border border-slate-200">
            <strong>Demo Authentication:</strong> College mini-project prototype. Simulated session stored in browser storage. No real external account servers are used.
          </div>
        </div>
      </div>
    </div>
  );
};
