# Smart Tourism Guide — Web Application

An intelligent, interactive, and responsive travel planning website built for the Software Engineering College Mini-Project. Smart Tourism Guide helps travelers plan customized trips across India based on their destination, budget in Indian Rupees (₹), number of days, number of travelers, and personal interests.

> **Project Type:** Modern Responsive Web Platform (Desktop, Tablet, and Mobile)  
> **Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, Lucide React Icons, React Router v6, localStorage  
> **API Dependency:** 100% self-contained simulated local models (no paid external API keys required).

---

## Quick Start (How to Run Locally)

Run the following commands in the project root directory:

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open your browser and navigate to:
**`http://localhost:3000/`**

To test the production build:
```bash
npm run build
npm run preview
```

---

## Recent UI Refinements & Features

### 1. Dedicated Welcome & Login Experience (`/login`)
- **First-Time Entry Flow:** Unauthenticated visitors are greeted with a professional two-column welcome screen featuring travel photography and branding.
- **Show/Hide Password:** Intuitive toggle icon for password visibility.
- **Sign In & Registration:** Includes full validation, name, email, password, and confirm password matching.
- **Continue as Guest:** Allows visitors to immediately enter and explore the platform without an account.
- **Demo Autofill:** Fast-testing button for academic evaluators.
- **Sign Out:** Accessible via the header profile dropdown to return to the login screen.

### 2. Streamlined Navigation Header
- **Single Horizontal Row:** Clean, spacious layout optimized for laptop screens (1366×768, 1440×900) and desktop monitors without line wrapping.
- **No Prototype Badge:** Polished, production-ready branding with logo, title, and tagline.
- **Compact Profile Menu:** Dropdown showing user session details and a working Sign Out action.
- **Responsive Mobile Drawer:** Smooth collapsible hamburger menu on mobile and tablet devices.

### 3. Floating Circular SOS Emergency Button
- **Fixed Position:** Always accessible in the bottom-right corner of the viewport.
- **Quick Action Modal:** One-tap calling to **112** (India's National Emergency Response), police (100), ambulance (108), tourist helpline (1363), and hospital guidance.
- **Non-Intrusive:** Floats above content without interfering with forms or the trip-planning workflow.

### 4. Cleaned Homepage
- **Polished Public Layout:** Removed the internal experiment workflow section from the homepage.
- **Natural Content Flow:** Transitions seamlessly from the hero section to featured destinations (Mumbai, Goa, Jaipur, Kerala, Delhi), feature highlights, and footer.
- **Workflow Access:** Users begin the 5-step journey directly via the primary *"Plan My Trip"* button in the header or hero section.

---

## Mandatory Five-Screen Experiment Workflow

The 5-step workflow remains fully functional and accessible through *"Plan My Trip"*:

1. **Screen 1 — Landing Page (`/`):** Hero section, destination exploration, and feature overview.
2. **Screen 2 — Trip Preferences (`/plan/preferences`):** Destination selector, duration (1–14 days), budget (₹), traveler count, 8 interest cards, and 8 service toggles with inline validation and state preservation.
3. **Screen 3 — Trip Processing (`/plan/processing`):** Configuration review, custom travel notes textarea, progressive animated generation sequence, and recoverable error simulator with retry.
4. **Screen 4 — Itinerary Review (`/plan/review`):** Day-wise schedule tabs, stays, dining, transport, mathematically consistent expense breakdown, and over-budget alert banner.
5. **Screen 5 — Trip Confirmation (`/plan/confirmation`):** Confetti celebration, unique demo reference ID, printable HTML download, and localStorage persistence.
