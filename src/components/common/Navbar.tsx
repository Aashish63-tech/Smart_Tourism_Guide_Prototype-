import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Compass,
  Menu,
  X,
  MapPin,
  Luggage,
  Languages,
  CloudSun,
  Bus,
  UtensilsCrossed,
  User,
  LogOut,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useTrip } from '../../context/TripContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { savedTrips, demoUser, logoutDemoUser } = useTrip();
  const navigate = useNavigate();

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations', icon: MapPin },
    { label: 'Transport', path: '/transport', icon: Bus },
    { label: 'Stays & Dining', path: '/accommodations', icon: UtensilsCrossed },
    { label: 'Weather', path: '/weather', icon: CloudSun },
    { label: 'Translate', path: '/translate', icon: Languages },
    { label: 'My Trips', path: '/my-trips', icon: Luggage, badgeCount: savedTrips.length }
  ];

  const handleSignOut = () => {
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
    logoutDemoUser();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo & Title (without PROTOTYPE badge) */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] animate-pulse-subtle" />
          </div>
          <div className="leading-tight">
            <span className="text-base sm:text-lg font-extrabold text-navy-900 tracking-tight font-serif whitespace-nowrap block">
              Smart Tourism Guide
            </span>
            <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium whitespace-nowrap hidden sm:block">
              Your Journey, Planned Smarter.
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links (Clean, single-row, no-wrap) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
          {navLinks.map(link => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-bold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100/80'
                  }`
                }
              >
                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                <span>{link.label}</span>
                {Boolean(link.badgeCount && link.badgeCount > 0) && (
                  <span className="ml-0.5 w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {link.badgeCount}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right side: Plan My Trip CTA + Profile Dropdown Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Primary CTA Button: Plan My Trip */}
          <button
            onClick={() => navigate('/plan/preferences')}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-brand-500/25 hover:shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>Plan My Trip</span>
          </button>

          {/* Compact User / Profile Menu */}
          {demoUser ? (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
                title="Account Menu"
              >
                <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {demoUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-semibold text-slate-700 hidden sm:inline truncate max-w-[85px]">
                  {demoUser.name.split(' ')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown Popup */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-slate-200 py-2 text-xs text-slate-700 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2.5 border-b border-slate-100">
                    <p className="font-bold text-navy-900 truncate">{demoUser.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{demoUser.email}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-[10px] font-bold">
                      {demoUser.isGuest ? 'Guest Session' : 'Demo Account'}
                    </span>
                  </div>

                  <div className="py-1">
                    <Link
                      to="/my-trips"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 transition-colors"
                    >
                      <Luggage className="w-4 h-4 text-slate-400" />
                      <span>My Saved Trips ({savedTrips.length})</span>
                    </Link>
                  </div>

                  <div className="border-t border-slate-100 pt-1">
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors font-semibold text-left cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>Sign In</span>
            </Link>
          )}

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-navy-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Collapsible) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map(link => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                  <span>{link.label}</span>
                </div>
                {Boolean(link.badgeCount && link.badgeCount > 0) && (
                  <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-xs font-bold flex items-center justify-center">
                    {link.badgeCount}
                  </span>
                )}
              </NavLink>
            );
          })}

          {/* Mobile User Profile & Logout */}
          <div className="pt-3 mt-2 border-t border-slate-100">
            {demoUser ? (
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                    {demoUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy-900">{demoUser.name}</p>
                    <p className="text-[10px] text-slate-500">{demoUser.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-2.5 py-1 text-xs font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 bg-brand-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In to Account</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
