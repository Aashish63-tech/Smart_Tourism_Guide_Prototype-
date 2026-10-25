import React, { useState } from 'react';
import { X, User, Mail, Lock, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { useTrip } from '../../context/TripContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, loginDemoUser, continueAsGuest } = useTrip();
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMsg, setSuccessMsg] = useState('');

  if (!isAuthModalOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (tab === 'signup' && !name.trim()) {
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
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const displayName = tab === 'signup' ? name : (email.split('@')[0] || 'Traveler');
    loginDemoUser(displayName, email);
    setSuccessMsg(`Welcome, ${displayName}! Demo session active.`);
    setTimeout(() => {
      setSuccessMsg('');
      setIsAuthModalOpen(false);
    }, 900);
  };

  const handleQuickFill = () => {
    setName('Aashish Sharma');
    setEmail('aashish.traveler@example.com');
    setPassword('travelPass123');
    setErrors({});
  };

  const handleGuest = () => {
    continueAsGuest();
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-slate-900 p-6 text-white relative">
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prototype Demo Authentication</span>
          </div>
          <h2 className="text-xl font-bold font-serif">
            {tab === 'signin' ? 'Sign In to Smart Tourism Guide' : 'Create Demo Account'}
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Simulated frontend access to save trips and personalized itineraries.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={() => { setTab('signin'); setErrors({}); }}
            className={`flex-1 py-3 text-sm font-semibold transition-all border-b-2 ${
              tab === 'signin'
                ? 'border-brand-600 text-brand-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setTab('signup'); setErrors({}); }}
            className={`flex-1 py-3 text-sm font-semibold transition-all border-b-2 ${
              tab === 'signup'
                ? 'border-brand-600 text-brand-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {tab === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Aashish Sharma"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                    errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-500/20 focus:border-brand-600'
                  } focus:outline-hidden focus:ring-2`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                  errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-500/20 focus:border-brand-600'
                } focus:outline-hidden focus:ring-2`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                placeholder="Min. 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                  errors.password ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-brand-500/20 focus:border-brand-600'
                } focus:outline-hidden focus:ring-2`}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.password}
              </p>
            )}
          </div>

          {/* Quick Demo Fill Button */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleQuickFill}
              className="w-full py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Fill Demo Credentials for Quick Testing</span>
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl shadow-sm transition-all text-sm mt-2"
          >
            {tab === 'signin' ? 'Sign In to Demo' : 'Create Demo Account'}
          </button>

          {/* Continue as Guest option */}
          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-2 text-xs text-slate-400 absolute">or</span>
          </div>

          <button
            type="button"
            onClick={handleGuest}
            className="w-full py-2 px-4 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all text-xs flex items-center justify-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-slate-500" />
            <span>Continue as Guest (Skip Sign-in)</span>
          </button>
        </form>

        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 text-center">
          Prototype simulation only. No real credentials or remote servers are involved.
        </div>
      </div>
    </div>
  );
};
