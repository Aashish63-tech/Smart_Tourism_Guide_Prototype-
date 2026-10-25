import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-900 font-serif">404</h1>
        <h2 className="text-lg font-bold text-slate-800">Page Not Found</h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          The travel destination or itinerary page you're searching for does not exist in our prototype directory.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
