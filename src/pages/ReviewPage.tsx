import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileCheck2,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Wallet,
  Users,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Clock,
  ExternalLink,
  Hotel,
  Utensils,
  Bus,
  CloudSun,
  ShieldCheck,
  Edit3,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { WorkflowStepper } from '../components/common/WorkflowStepper';
import { DemoBadge } from '../components/common/DemoBadge';

export const ReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { generatedItinerary, preferences, saveCurrentTrip } = useTrip();

  // If no itinerary is currently in memory, offer to go to preferences
  if (!generatedItinerary) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-lg text-center space-y-4">
          <Info className="w-12 h-12 text-brand-600 mx-auto" />
          <h2 className="text-xl font-bold text-navy-900">No Itinerary Ready for Review</h2>
          <p className="text-xs text-slate-500">
            Please define your trip parameters to generate and review your itinerary.
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
    destination,
    durationDays,
    travellerCount,
    allocatedBudget,
    days,
    hotels,
    restaurants,
    transportOptions,
    weather,
    expenseBreakdown,
    selectedServices,
    isOverBudget,
    budgetDifference
  } = generatedItinerary;

  const [activeDay, setActiveDay] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEditTrip = () => {
    navigate('/plan/preferences');
  };

  const handleConfirmTrip = () => {
    if (isSubmitting) return; // prevent duplicate clicks
    setIsSubmitting(true);

    saveCurrentTrip();

    // Navigate to Screen 5: Confirmation
    setTimeout(() => {
      navigate('/plan/confirmation');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Workflow Stepper: Step 3 */}
      <WorkflowStepper currentStep={3} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        {/* Page Heading & Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Screen 4 of 5 — Itinerary Review & Verification</span>
            </div>
            <h1 className="text-3xl font-extrabold text-navy-900 tracking-tight font-serif">
              Review Your Trip to {destination}
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Verify your day-wise schedule, expenses, hotels, restaurants, and transit guidance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <DemoBadge label="Demo Estimates" />
            <button
              onClick={handleEditTrip}
              className="px-3.5 py-2 rounded-xl border border-slate-300 hover:border-brand-500 hover:bg-white bg-slate-100 text-slate-700 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5 text-brand-600" />
              <span>Edit Trip</span>
            </button>
          </div>
        </div>

        {/* OVER-BUDGET OR IN-BUDGET ALERT BANNER */}
        {isOverBudget ? (
          <div className="mb-8 p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-amber-900">
                  Estimated Trip Cost Exceeds Allocated Budget
                </h3>
                <span className="text-xs font-extrabold bg-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-full">
                  Over by ₹{budgetDifference.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                Your estimated total of <strong>₹{expenseBreakdown.total.toLocaleString('en-IN')}</strong> exceeds your target budget of <strong>₹{allocatedBudget.toLocaleString('en-IN')}</strong>. 
                As required by our project experiment, prices are not artificially reduced. You can proceed with confirmation or click <strong>Edit Trip</strong> to adjust days, choose budget accommodations, or increase your budget.
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-xs flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs">
              <span className="font-bold">Well balanced within budget! </span>
              <span>
                Estimated cost (₹{expenseBreakdown.total.toLocaleString('en-IN')}) is within your allocated budget of ₹{allocatedBudget.toLocaleString('en-IN')} (Surplus: ₹{Math.abs(budgetDifference).toLocaleString('en-IN')}).
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT 8 COLS: Day-Wise Itinerary & Attractions */}
          <div className="lg:col-span-8 space-y-6">
            {/* Day Selector Tabs */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Select Day ({durationDays} Days Total)
                </span>
                <span className="text-xs text-brand-700 font-semibold">
                  Viewing Day {activeDay} of {durationDays}
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {days.map(d => (
                  <button
                    key={d.dayNumber}
                    onClick={() => setActiveDay(d.dayNumber)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                      activeDay === d.dayNumber
                        ? 'bg-brand-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Day {d.dayNumber}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Day Detail Card */}
            {(() => {
              const currentDay = days.find(d => d.dayNumber === activeDay) || days[0];
              return (
                <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-brand-700 uppercase tracking-wider">
                        Day {currentDay.dayNumber} Plan
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Est. Day Cost: ₹{currentDay.dayBudget.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-navy-900 mt-1 font-serif">
                      {currentDay.theme}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Key Highlights: {currentDay.highlight}
                    </p>
                  </div>

                  {/* Activities List */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Scheduled Sightseeing & Attractions
                    </h3>

                    {currentDay.activities.map((act, idx) => (
                      <div
                        key={act.id}
                        className="p-4 rounded-xl border border-slate-200/70 bg-slate-50/60 hover:bg-white hover:border-brand-200 transition-all space-y-2"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                                act.timeSlot === 'Morning'
                                  ? 'bg-amber-100 text-amber-800'
                                  : act.timeSlot === 'Afternoon'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-purple-100 text-purple-800'
                              }`}
                            >
                              {act.timeSlot}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900">
                              {act.name}
                            </h4>
                          </div>

                          <span className="text-xs font-bold text-emerald-700 shrink-0">
                            {act.entryFee === 0 ? 'Free Entry' : `₹${act.entryFee} entry`}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {act.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 gap-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{act.location}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>Approx. {act.durationHours} hrs</span>
                          </span>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              act.mapQuery
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-700 hover:text-brand-800 font-semibold flex items-center gap-1"
                          >
                            <span>Open in Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Day Meal & Transit Note */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/60 text-xs">
                      <div className="font-bold text-orange-950 flex items-center gap-1.5 mb-1">
                        <Utensils className="w-3.5 h-3.5 text-orange-600" />
                        <span>Recommended {currentDay.suggestedMeal.meal}</span>
                      </div>
                      <p className="text-orange-900 font-medium">{currentDay.suggestedMeal.dish}</p>
                      <p className="text-[11px] text-orange-700 mt-1">
                        Est. Cost: ₹{currentDay.suggestedMeal.estimatedCost} for {travellerCount} pax
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs">
                      <div className="font-bold text-blue-950 flex items-center gap-1.5 mb-1">
                        <Bus className="w-3.5 h-3.5 text-blue-600" />
                        <span>Transit Recommendation</span>
                      </div>
                      <p className="text-blue-900 font-medium">{currentDay.transitNote}</p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* HOTELS & RESTAURANTS SUGGESTIONS */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <Hotel className="w-4 h-4 text-brand-600" />
                <span>Suggested Accommodations for {destination}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {hotels.map(h => (
                  <div key={h.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {h.tier}
                        </span>
                        <span className="text-xs font-bold text-amber-600">★ {h.rating}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 mt-1">{h.name}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{h.location}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500 text-[11px]">Nightly:</span>
                      <strong className="text-slate-900">₹{h.pricePerNight.toLocaleString('en-IN')}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TRANSPORTATION OPTIONS */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
                <Bus className="w-4 h-4 text-brand-600" />
                <span>Local Transport & Estimated Fares</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {transportOptions.map(t => (
                  <div key={t.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50">
                    <h4 className="text-xs font-bold text-slate-900">{t.mode}</h4>
                    <p className="text-[11px] text-slate-600 mt-1">{t.description}</p>
                    <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500 text-[11px]">Est. Trip Fare:</span>
                      <strong className="text-brand-700">₹{t.estimatedCost}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLS: Expense Breakdown & Budget Verification */}
          <div className="lg:col-span-4 space-y-6">
            {/* EXPENSE BREAKDOWN CARD */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-5 sticky top-28">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-emerald-600" />
                  <span>Itemized Expense Breakdown</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Calculated directly from displayed categories for {durationDays} days & {travellerCount} travelers.
                </p>
              </div>

              {/* Category rows */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-slate-400" />
                    <span>Local Transportation</span>
                  </span>
                  <strong className="text-slate-800">
                    ₹{expenseBreakdown.transportation.toLocaleString('en-IN')}
                  </strong>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-slate-400" />
                    <span>Food & Dining</span>
                  </span>
                  <strong className="text-slate-800">
                    ₹{expenseBreakdown.food.toLocaleString('en-IN')}
                  </strong>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Attractions & Entry Fees</span>
                  </span>
                  <strong className="text-slate-800">
                    ₹{expenseBreakdown.attractions.toLocaleString('en-IN')}
                  </strong>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600 flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-slate-400" />
                    <span>Accommodation ({Math.max(durationDays - 1, 1)} Nights)</span>
                  </span>
                  <strong className="text-slate-800">
                    ₹{expenseBreakdown.accommodation.toLocaleString('en-IN')}
                  </strong>
                </div>

                {/* EXACT TOTAL ROW */}
                <div className="flex items-center justify-between pt-2 text-sm font-extrabold text-navy-900 border-t-2 border-slate-200">
                  <span>Estimated Total</span>
                  <span className="text-brand-700 text-base">
                    ₹{expenseBreakdown.total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Budget Comparison Bar */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Target Budget:</span>
                  <span className="font-bold text-slate-800">
                    ₹{allocatedBudget.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      isOverBudget ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        (expenseBreakdown.total / allocatedBudget) * 100
                      )}%`
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">
                    {Math.round((expenseBreakdown.total / allocatedBudget) * 100)}% of Budget
                  </span>
                  <span
                    className={`font-bold ${
                      isOverBudget ? 'text-amber-700' : 'text-emerald-700'
                    }`}
                  >
                    {isOverBudget ? 'Over Budget' : 'Within Budget'}
                  </span>
                </div>
              </div>

              {/* Weather Info Widget */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <CloudSun className="w-3.5 h-3.5 text-amber-500" />
                    <span>{destination} Climate</span>
                  </span>
                  <span className="font-extrabold text-slate-900">{weather.tempCelsius}°C</span>
                </div>
                <p className="text-slate-600 text-[11px]">{weather.condition}</p>
                <p className="text-slate-500 text-[10px]">
                  Tip: {weather.clothingTip}
                </p>
              </div>

              {/* Confirm / Edit Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleConfirmTrip}
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm My Trip'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleEditTrip}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Edit Preferences & Regenerate</span>
                </button>
              </div>

              <div className="text-[10px] text-slate-400 text-center">
                Confirming saves your itinerary to localStorage and advances to Screen 5.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
