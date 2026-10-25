import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  PartyPopper,
  CheckCircle2,
  Download,
  Luggage,
  Home,
  Calendar,
  Wallet,
  Users,
  MapPin,
  Clock,
  Sparkles,
  Share2,
  FileText,
  AlertCircle,
  ExternalLink,
  PhoneCall,
  Printer
} from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { WorkflowStepper } from '../components/common/WorkflowStepper';
import { storageService } from '../services/storageService';
import { DemoBadge } from '../components/common/DemoBadge';

export const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const { generatedItinerary } = useTrip();
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showFullViewModal, setShowFullViewModal] = useState(false);

  useEffect(() => {
    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback if canvas not available
    }
  }, []);

  if (!generatedItinerary) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-lg text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-600 mx-auto" />
          <h2 className="text-xl font-bold text-navy-900">No Confirmed Itinerary Found</h2>
          <p className="text-xs text-slate-500">
            Please plan and confirm your itinerary through the 5-step workflow.
          </p>
          <button
            onClick={() => navigate('/plan/preferences')}
            className="w-full py-2.5 px-4 bg-brand-600 text-white font-bold rounded-xl text-sm"
          >
            Start Trip Planning
          </button>
        </div>
      </div>
    );
  }

  const {
    referenceId,
    destination,
    durationDays,
    travellerCount,
    allocatedBudget,
    expenseBreakdown,
    days,
    hotels,
    selectedInterests
  } = generatedItinerary;

  const handleDownload = () => {
    storageService.exportItineraryHtml(generatedItinerary);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Workflow Stepper: Step 4 */}
      <WorkflowStepper currentStep={4} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
        {/* SUCCESS CELEBRATION HEADER */}
        <div className="text-center space-y-3 mb-8">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30 animate-bounce">
            <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Screen 5 of 5 — Trip Confirmation & Ticket Pass</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-serif">
            Your Trip Is Ready!
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your personalized travel itinerary has been synthesized and saved to your device’s local storage.
          </p>
        </div>

        {/* TICKET / CONFIRMATION CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden mb-8">
          {/* Ticket Header */}
          <div className="bg-gradient-to-r from-navy-900 via-slate-900 to-navy-900 p-6 sm:p-8 text-white relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-brand-400">
                  Demo Itinerary Pass
                </span>
                <h2 className="text-2xl font-bold font-serif mt-1">
                  {durationDays}-Day Tour of {destination}
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  Customized for {travellerCount} {travellerCount === 1 ? 'Traveller' : 'Travellers'}
                </p>
              </div>

              {/* Reference ID Badge */}
              <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 text-right sm:text-right">
                <span className="text-[10px] text-slate-300 uppercase tracking-wider block font-semibold">
                  Demo Reference ID
                </span>
                <span className="text-lg font-mono font-extrabold text-brand-300">
                  {referenceId}
                </span>
              </div>
            </div>
          </div>

          {/* Ticket Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-[11px] text-slate-500 font-medium block">Duration</span>
                <strong className="text-sm font-bold text-navy-900">
                  {durationDays} {durationDays === 1 ? 'Day' : 'Days'}
                </strong>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-[11px] text-slate-500 font-medium block">Total Estimate</span>
                <strong className="text-sm font-bold text-emerald-700">
                  ₹{expenseBreakdown.total.toLocaleString('en-IN')}
                </strong>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-[11px] text-slate-500 font-medium block">Target Budget</span>
                <strong className="text-sm font-bold text-slate-700">
                  ₹{allocatedBudget.toLocaleString('en-IN')}
                </strong>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <span className="text-[11px] text-slate-500 font-medium block">Storage Status</span>
                <span className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Saved
                </span>
              </div>
            </div>

            {/* Itinerary Schedule Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>Trip Schedule Summary</span>
                <span className="text-brand-700 font-semibold">{days.length} Daily Stages</span>
              </h3>

              <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-2xl overflow-hidden">
                {days.map(d => (
                  <div key={d.dayNumber} className="p-3.5 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-brand-100 text-brand-800 font-bold flex items-center justify-center text-[11px]">
                        D{d.dayNumber}
                      </span>
                      <div>
                        <div className="font-bold text-slate-900">{d.theme}</div>
                        <div className="text-[11px] text-slate-500">{d.highlight}</div>
                      </div>
                    </div>
                    <span className="text-slate-600 font-semibold shrink-0">
                      ₹{d.dayBudget.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer Callout */}
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Prototype Demo Confirmation:</strong> The Reference ID (<code>{referenceId}</code>) is generated locally for the college experiment. Prices, weather, and bookings are simulated sample data and do not constitute actual hotel or airline reservations.
              </div>
            </div>

            {/* Download Notification */}
            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Itinerary HTML file successfully downloaded! Check your Downloads folder.</span>
              </div>
            )}

            {/* BUTTONS ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowFullViewModal(true)}
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View My Trip</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Itinerary</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/')}
                className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>

        {/* Saved Trips link */}
        <div className="text-center">
          <button
            onClick={() => navigate('/my-trips')}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-800 hover:underline"
          >
            <Luggage className="w-4 h-4" />
            <span>Manage All Saved Trips in My Trips Hub</span>
          </button>
        </div>
      </div>

      {/* FULL ITINERARY VIEW MODAL */}
      {showFullViewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
            <div className="p-6 bg-navy-900 text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
                  Full Saved Itinerary
                </span>
                <h3 className="text-lg font-bold font-serif">
                  {destination} ({durationDays} Days) — Ref: {referenceId}
                </h3>
              </div>
              <button
                onClick={() => setShowFullViewModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
              {days.map(d => (
                <div key={d.dayNumber} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-navy-900 mb-1">
                    Day {d.dayNumber}: {d.theme}
                  </h4>
                  <div className="space-y-2 mt-3">
                    {d.activities.map(a => (
                      <div key={a.id} className="pl-3 border-l-2 border-brand-500">
                        <strong className="text-slate-900">{a.timeSlot}: {a.name}</strong>
                        <p className="text-slate-600 mt-0.5">{a.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-slate-500">
                    Dining: {d.suggestedMeal.dish}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export as HTML</span>
              </button>
              <button
                onClick={() => setShowFullViewModal(false)}
                className="px-4 py-2 border border-slate-300 rounded-xl font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
