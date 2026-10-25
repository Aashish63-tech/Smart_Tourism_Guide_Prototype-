import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Edit3,
  Calendar,
  Users,
  Wallet,
  Compass,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Clock,
  Cpu,
  Layers,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { WorkflowStepper } from '../components/common/WorkflowStepper';
import { DemoBadge } from '../components/common/DemoBadge';

export const ProcessingPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    preferences,
    updatePreferences,
    isGenerating,
    generationStage,
    generationError,
    simulateGenerationFailure,
    setSimulateGenerationFailure,
    generateTrip,
    retryGeneration
  } = useTrip();

  const [notes, setNotes] = useState(
    preferences.additionalPreferences ||
      'Prefer less crowded morning hours, authentic local vegetarian food, and comfortable metro/cab transportation.'
  );

  const handleNotesChange = (val: string) => {
    setNotes(val);
    updatePreferences({ additionalPreferences: val });
  };

  const handleStartGeneration = async () => {
    updatePreferences({ additionalPreferences: notes });
    const success = await generateTrip();
    if (success) {
      navigate('/plan/review');
    }
  };

  const handleRetry = async () => {
    const success = await retryGeneration();
    if (success) {
      navigate('/plan/review');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Workflow Stepper: Step 2 */}
      <WorkflowStepper currentStep={2} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Screen 3 of 5 — Trip Processing & Input Review</span>
          </div>
          <h1 className="text-3xl font-extrabold text-navy-900 tracking-tight font-serif">
            Personalize Your Journey
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Review your trip parameters, append custom travel requests, and generate your destination-tailored day-by-day plan.
          </p>
        </div>

        {/* LOADING STATE OVERLAY / CARD */}
        {isGenerating ? (
          <div className="bg-white rounded-3xl border border-brand-200/80 p-8 sm:p-12 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-brand-100" />
              <div className="absolute inset-0 rounded-full border-4 border-brand-600 border-t-transparent animate-spin" />
              <div className="absolute inset-2 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-navy-900 font-serif">
                Synthesizing Your Itinerary
              </h2>
              <p className="text-sm font-semibold text-brand-700 mt-2 flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-brand-600" />
                <span>{generationStage}</span>
              </p>
              <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">
                Processing {preferences.durationDays} days in {preferences.destination} for {preferences.travellerCount} travelers with a ₹{preferences.totalBudget.toLocaleString('en-IN')} budget...
              </p>
            </div>

            {/* Stage Progress Pills */}
            <div className="max-w-md mx-auto grid grid-cols-2 gap-2 text-[11px] text-slate-500 text-left">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Attraction Sequencing</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Expense Forecasting</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Hotel Matching</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Weather Advisories</span>
              </div>
            </div>
          </div>
        ) : generationError ? (
          /* RECOVERABLE ERROR STATE */
          <div className="bg-red-50/80 rounded-3xl border border-red-200 p-8 sm:p-10 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-950">
                Itinerary Processing Interrupted
              </h2>
              <p className="text-sm text-red-700 mt-2 max-w-lg mx-auto">
                {generationError}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                This is a recoverable error simulation. Click the retry button below to re-synthesize your itinerary.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleRetry}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retry Generation</span>
              </button>
              <button
                type="button"
                onClick={() => navigate('/plan/preferences')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-semibold text-sm transition-all"
              >
                Edit Parameters
              </button>
            </div>
          </div>
        ) : (
          /* NORMAL INPUT REVIEW & EDITABLE FORM */
          <div className="space-y-6">
            {/* Input Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-brand-600" />
                    <span>Selected Trip Configuration</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verify all parameters before creating your itinerary.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/plan/preferences')}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-brand-500 hover:bg-brand-50 text-brand-700 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Preferences</span>
                </button>
              </div>

              {/* Grid of Key Parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Destination
                  </span>
                  <strong className="text-base font-bold text-navy-900 block mt-1">
                    {preferences.destination}
                  </strong>
                  <span className="text-[11px] text-brand-700 font-medium">India</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Duration
                  </span>
                  <strong className="text-base font-bold text-navy-900 block mt-1">
                    {preferences.durationDays} {preferences.durationDays === 1 ? 'Day' : 'Days'}
                  </strong>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {Math.max(preferences.durationDays - 1, 1)} Nights Stay
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Total Budget
                  </span>
                  <strong className="text-base font-bold text-emerald-700 block mt-1">
                    ₹{preferences.totalBudget.toLocaleString('en-IN')}
                  </strong>
                  <span className="text-[11px] text-slate-500 font-medium">Target Allocation</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Travellers
                  </span>
                  <strong className="text-base font-bold text-navy-900 block mt-1">
                    {preferences.travellerCount} {preferences.travellerCount === 1 ? 'Person' : 'Persons'}
                  </strong>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {preferences.travellerCount === 1 ? 'Solo' : 'Group Tour'}
                  </span>
                </div>
              </div>

              {/* Selected Interests & Services Lists */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Selected Travel Interests:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {preferences.interests.map(i => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-brand-600" />
                        <span>{i}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                    Included Travel Services:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {preferences.services.map(s => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>{s}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Additional Preferences Field */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-1">
                  Editable Additional Preferences & Custom Notes
                </label>
                <p className="text-xs text-slate-500 mb-3">
                  Specify dietary restrictions, mobility needs, preferred pacing, or particular monuments.
                </p>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={e => handleNotesChange(e.target.value)}
                  placeholder="e.g. Prefer less crowded attractions, local food, affordable cabs, and quiet sunset viewpoints..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-brand-600 focus:outline-hidden focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              {/* Developer / Evaluator Testing Tool: Simulate Error State */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Cpu className="w-4 h-4 text-purple-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Experiment Evaluator Feature: </span>
                    <span className="text-slate-500">Test recoverable error handling</span>
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={simulateGenerationFailure}
                    onChange={e => setSimulateGenerationFailure(e.target.checked)}
                    className="w-4 h-4 rounded-sm text-brand-600 accent-brand-600"
                  />
                  <span className="text-xs font-bold text-slate-700">Simulate Failure</span>
                </label>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <DemoBadge label="Local Model Engine" />
                <span>Deterministic offline synthesis • No paid third-party API keys required</span>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/plan/preferences')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Preferences</span>
              </button>

              <button
                type="button"
                onClick={handleStartGeneration}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Generate Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
