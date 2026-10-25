import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Luggage,
  Calendar,
  Wallet,
  Users,
  MapPin,
  Trash2,
  Download,
  Eye,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';
import { useTrip } from '../context/TripContext';
import { storageService } from '../services/storageService';
import { SavedTrip } from '../types';
import { DemoBadge } from '../components/common/DemoBadge';

export const MyTripsPage: React.FC = () => {
  const navigate = useNavigate();
  const { savedTrips, deleteTrip, setGeneratedItinerary } = useTrip();
  const [selectedTrip, setSelectedTrip] = useState<SavedTrip | null>(null);
  const [tripToDelete, setTripToDelete] = useState<SavedTrip | null>(null);
  const [downloadMsg, setDownloadMsg] = useState('');

  const handleOpenTrip = (trip: SavedTrip) => {
    setSelectedTrip(trip);
  };

  const handleLoadIntoPlanner = (trip: SavedTrip) => {
    setGeneratedItinerary(trip);
    navigate('/plan/review');
  };

  const handleDownload = (trip: SavedTrip) => {
    storageService.exportItineraryHtml(trip);
    setDownloadMsg(`Downloaded HTML pass for ${trip.destination}!`);
    setTimeout(() => setDownloadMsg(''), 3000);
  };

  const confirmDelete = () => {
    if (tripToDelete) {
      deleteTrip(tripToDelete.id);
      setTripToDelete(null);
      if (selectedTrip?.id === tripToDelete.id) {
        setSelectedTrip(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
            <Luggage className="w-3.5 h-3.5" />
            <span>Saved Itinerary Manager</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-serif">
            My Saved Trips ({savedTrips.length})
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            All your confirmed itineraries are securely preserved on your device via browser localStorage. View, export, or manage your trips anytime.
          </p>
        </div>

        {downloadMsg && (
          <div className="mb-6 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2 max-w-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadMsg}</span>
          </div>
        )}

        {/* EMPTY STATE */}
        {savedTrips.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center max-w-lg mx-auto shadow-xs space-y-4 my-8">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Luggage className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-navy-900 font-serif">
              No Trips Saved Yet
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              You haven't confirmed any travel plans yet. Go through the 5-step planner to create your first customized Indian trip itinerary!
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate('/plan/preferences')}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Plan Your First Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* SAVED TRIPS LIST */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedTrips.map(trip => (
              <div
                key={trip.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
                      {trip.referenceId}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {new Date(trip.savedAt || trip.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-navy-900 font-serif">
                      {trip.durationDays}-Day Tour of {trip.destination}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {trip.travellerCount} {trip.travellerCount === 1 ? 'Traveller' : 'Travellers'} • {trip.selectedInterests.join(', ') || 'Sightseeing'}
                    </p>
                  </div>

                  {/* Financials & Status */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                        Estimated Cost
                      </span>
                      <strong className="text-emerald-700 font-bold">
                        ₹{trip.expenseBreakdown.total.toLocaleString('en-IN')}
                      </strong>
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                        Allocated Budget
                      </span>
                      <strong className="text-slate-800 font-bold">
                        ₹{trip.allocatedBudget.toLocaleString('en-IN')}
                      </strong>
                    </div>
                  </div>

                  {/* Short highlight */}
                  <p className="text-xs text-slate-600 line-clamp-2">
                    Highlights: {trip.days.map(d => d.theme).join(' • ')}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleOpenTrip(trip)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1"
                      title="Quick View"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>View</span>
                    </button>

                    <button
                      onClick={() => handleDownload(trip)}
                      className="p-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold transition-colors flex items-center gap-1"
                      title="Download Itinerary HTML"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleLoadIntoPlanner(trip)}
                      className="px-3 py-2 rounded-xl bg-navy-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                      title="Open in Itinerary Review Screen"
                    >
                      Open
                    </button>

                    <button
                      onClick={() => setTripToDelete(trip)}
                      className="p-2 rounded-xl hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors"
                      title="Delete Trip"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* QUICK VIEW ITINERARY MODAL */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden">
            <div className="p-6 bg-navy-900 text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
                  Saved Itinerary ({selectedTrip.referenceId})
                </span>
                <h3 className="text-xl font-bold font-serif">
                  {selectedTrip.durationDays} Days in {selectedTrip.destination}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTrip(null)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 grid grid-cols-3 gap-2 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Duration</span>
                  <div className="font-bold text-navy-900">{selectedTrip.durationDays} Days</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Travellers</span>
                  <div className="font-bold text-navy-900">{selectedTrip.travellerCount} Persons</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Total Cost</span>
                  <div className="font-bold text-emerald-700">
                    ₹{selectedTrip.expenseBreakdown.total.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {selectedTrip.days.map(d => (
                <div key={d.dayNumber} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-sm text-navy-900">
                      Day {d.dayNumber}: {d.theme}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Est. ₹{d.dayBudget}
                    </span>
                  </div>

                  <div className="space-y-2 mt-2">
                    {d.activities.map(a => (
                      <div key={a.id} className="pl-3 border-l-2 border-brand-500">
                        <strong className="text-slate-900">{a.timeSlot}: {a.name}</strong>{' '}
                        <span className="text-slate-500">({a.location})</span>
                        <p className="text-slate-600 mt-0.5">{a.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 text-slate-500 flex items-center justify-between">
                    <span>Dining: {d.suggestedMeal.dish}</span>
                    <span className="text-slate-400 text-[10px]">{d.transitNote}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => handleDownload(selectedTrip)}
                className="px-4 py-2 bg-brand-600 text-white rounded-xl font-bold text-xs flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export as HTML</span>
              </button>
              <button
                onClick={() => setSelectedTrip(null)}
                className="px-4 py-2 border border-slate-300 rounded-xl font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE DIALOG */}
      {tripToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Delete Trip Confirmation</h3>
            <p className="text-xs text-slate-600">
              Are you sure you want to remove your saved {tripToDelete.durationDays}-day itinerary for <strong>{tripToDelete.destination}</strong> ({tripToDelete.referenceId}) from localStorage?
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setTripToDelete(null)}
                className="px-4 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl"
              >
                Delete Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
