import { SavedTrip, TripPreferences, GeneratedItinerary } from '../types';

const SAVED_TRIPS_KEY = 'stg_saved_trips';
const DRAFT_PREFS_KEY = 'stg_draft_preferences';
const CURRENT_ITINERARY_KEY = 'stg_current_itinerary';
const DEMO_USER_KEY = 'stg_demo_user';
const CONFIRMED_REF_KEYS = 'stg_confirmed_reference_ids';

export const storageService = {
  getSavedTrips(): SavedTrip[] {
    try {
      const data = localStorage.getItem(SAVED_TRIPS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to load saved trips from localStorage', e);
      return [];
    }
  },

  saveTrip(itinerary: GeneratedItinerary): SavedTrip {
    const existing = this.getSavedTrips();
    // Check if trip already exists by referenceId
    const alreadySaved = existing.find(t => t.referenceId === itinerary.referenceId);
    if (alreadySaved) {
      return alreadySaved;
    }

    const savedTrip: SavedTrip = {
      ...itinerary,
      savedAt: new Date().toISOString(),
      title: `${itinerary.durationDays}-Day Trip to ${itinerary.destination}`
    };

    const updated = [savedTrip, ...existing];
    try {
      localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save trip to localStorage', e);
    }
    return savedTrip;
  },

  deleteTrip(tripId: string): boolean {
    try {
      const existing = this.getSavedTrips();
      const filtered = existing.filter(t => t.id !== tripId && t.referenceId !== tripId);
      localStorage.setItem(SAVED_TRIPS_KEY, JSON.stringify(filtered));
      return true;
    } catch (e) {
      console.error('Failed to delete trip from localStorage', e);
      return false;
    }
  },

  getDraftPreferences(): TripPreferences | null {
    try {
      const data = localStorage.getItem(DRAFT_PREFS_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveDraftPreferences(prefs: TripPreferences): void {
    try {
      localStorage.setItem(DRAFT_PREFS_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.error('Failed to save draft preferences', e);
    }
  },

  getCurrentItinerary(): GeneratedItinerary | null {
    try {
      const data = localStorage.getItem(CURRENT_ITINERARY_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  saveCurrentItinerary(itinerary: GeneratedItinerary): void {
    try {
      localStorage.setItem(CURRENT_ITINERARY_KEY, JSON.stringify(itinerary));
    } catch (e) {
      console.error('Failed to save current itinerary', e);
    }
  },

  isReferenceConfirmed(refId: string): boolean {
    try {
      const data = localStorage.getItem(CONFIRMED_REF_KEYS);
      const list: string[] = data ? JSON.parse(data) : [];
      return list.includes(refId);
    } catch (e) {
      return false;
    }
  },

  markReferenceConfirmed(refId: string): void {
    try {
      const data = localStorage.getItem(CONFIRMED_REF_KEYS);
      const list: string[] = data ? JSON.parse(data) : [];
      if (!list.includes(refId)) {
        list.push(refId);
        localStorage.setItem(CONFIRMED_REF_KEYS, JSON.stringify(list));
      }
    } catch (e) {
      console.error('Failed to mark confirmed reference', e);
    }
  },

  getDemoUser(): { name: string; email: string; isGuest: boolean } | null {
    try {
      const data = localStorage.getItem(DEMO_USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  setDemoUser(user: { name: string; email: string; isGuest: boolean } | null): void {
    try {
      if (user) {
        localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(DEMO_USER_KEY);
      }
    } catch (e) {
      console.error('Failed to set demo user', e);
    }
  },

  exportItineraryHtml(itinerary: GeneratedItinerary): void {
    const daysHtml = itinerary.days.map(d => `
      <div style="margin-bottom: 24px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
        <h3 style="color: #0f172a; margin-top: 0; font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 6px;">Day ${d.dayNumber}: ${d.theme}</h3>
        <p style="color: #475569; font-style: italic; margin-bottom: 12px;">Highlight: ${d.highlight}</p>
        <div style="margin-left: 8px;">
          ${d.activities.map(a => `
            <div style="margin-bottom: 12px;">
              <span style="display: inline-block; background-color: #ccfbf1; color: #0f766e; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${a.timeSlot}</span>
              <strong style="color: #1e293b; margin-left: 6px;">${a.name}</strong> 
              <span style="color: #64748b; font-size: 13px;">(${a.location} - Entry: ₹${a.entryFee})</span>
              <p style="margin: 4px 0 0 0; color: #334155; font-size: 14px;">${a.description}</p>
            </div>
          `).join('')}
        </div>
        <div style="margin-top: 12px; padding: 8px 12px; background-color: #fff; border-radius: 6px; font-size: 13px; color: #0f172a;">
          <strong>🍽️ Suggested Dining:</strong> ${d.suggestedMeal.dish} (${d.suggestedMeal.place} - Est. ₹${d.suggestedMeal.estimatedCost})<br/>
          <strong>🚗 Transit Note:</strong> ${d.transitNote}
        </div>
      </div>
    `).join('');

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Smart Tourism Guide — Itinerary for ${itinerary.destination}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 800px; margin: 40px auto; padding: 0 20px; }
    h1 { color: #0f172a; border-bottom: 3px solid #0d9488; padding-bottom: 12px; }
    .badge { background: #0d9488; color: white; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
    .summary-card { background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px; padding: 16px; margin: 20px 0; }
    .expense-table { width: 100%; border-collapse: collapse; margin-top: 16px; background: white; border-radius: 6px; overflow: hidden; }
    .expense-table th, .expense-table td { padding: 10px 14px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    .expense-table th { background: #f8fafc; font-weight: 600; color: #334155; }
    .total-row { font-weight: bold; background: #f1f5f9; }
    .disclaimer { font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 12px; }
  </style>
</head>
<body>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div>
      <span class="badge">College Prototype Itinerary</span>
      <h1>${itinerary.durationDays}-Day Trip to ${itinerary.destination}</h1>
    </div>
    <div style="text-align: right;">
      <p style="margin: 0; font-size: 14px; color: #64748b;">Reference ID:</p>
      <strong style="font-size: 18px; color: #0d9488;">${itinerary.referenceId}</strong>
    </div>
  </div>

  <div class="summary-card">
    <table style="width: 100%;">
      <tr>
        <td><strong>Travellers:</strong> ${itinerary.travellerCount}</td>
        <td><strong>Allocated Budget:</strong> ₹${itinerary.allocatedBudget.toLocaleString('en-IN')}</td>
        <td><strong>Estimated Total:</strong> ₹${itinerary.expenseBreakdown.total.toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td colspan="3" style="padding-top: 8px;">
          <strong>Selected Interests:</strong> ${itinerary.selectedInterests.join(', ') || 'General Sightseeing'}
        </td>
      </tr>
      ${itinerary.userNotes ? `
      <tr>
        <td colspan="3" style="padding-top: 8px;">
          <strong>Personal Preferences:</strong> ${itinerary.userNotes}
        </td>
      </tr>
      ` : ''}
    </table>
  </div>

  <h2>Day-Wise Travel Itinerary</h2>
  ${daysHtml}

  <h2>Estimated Expense Breakdown</h2>
  <table class="expense-table">
    <thead>
      <tr>
        <th>Expense Category</th>
        <th>Estimated Cost (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>🚗 Local Transportation (${itinerary.durationDays} Days)</td>
        <td>₹${itinerary.expenseBreakdown.transportation.toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td>🍽️ Food & Meals (${itinerary.travellerCount} Travellers)</td>
        <td>₹${itinerary.expenseBreakdown.food.toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td>🎟️ Attractions & Monument Entry Fees</td>
        <td>₹${itinerary.expenseBreakdown.attractions.toLocaleString('en-IN')}</td>
      </tr>
      <tr>
        <td>🏨 Accommodation (${Math.max(itinerary.durationDays - 1, 1)} Nights)</td>
        <td>₹${itinerary.expenseBreakdown.accommodation.toLocaleString('en-IN')}</td>
      </tr>
      <tr class="total-row">
        <td>Estimated Total</td>
        <td>₹${itinerary.expenseBreakdown.total.toLocaleString('en-IN')}</td>
      </tr>
    </tbody>
  </table>

  <h2>Emergency Contacts</h2>
  <p><strong>National Emergency Number:</strong> 112 (All India 24x7)<br/>
  <strong>Tourist Helpline:</strong> 1363 (Ministry of Tourism)<br/>
  <strong>Police:</strong> 100 | <strong>Ambulance:</strong> 108</p>

  <div class="disclaimer">
    <p><strong>Important Note:</strong> This itinerary and Reference ID (${itinerary.referenceId}) are generated by the Smart Tourism Guide college project prototype for demonstration purposes. Prices, weather, and recommendations are simulated sample data.</p>
  </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Smart_Tourism_Guide_${itinerary.destination}_Itinerary_${itinerary.referenceId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};
