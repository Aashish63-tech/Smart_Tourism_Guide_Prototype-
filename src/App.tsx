import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { TripProvider, useTrip } from './context/TripContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingSOSButton } from './components/common/FloatingSOSButton';

import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { PreferencesPage } from './pages/PreferencesPage';
import { ProcessingPage } from './pages/ProcessingPage';
import { ReviewPage } from './pages/ReviewPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

import { ExploreDestinationsPage } from './pages/ExploreDestinationsPage';
import { TransportPage } from './pages/TransportPage';
import { AccommodationsPage } from './pages/AccommodationsPage';
import { WeatherPage } from './pages/WeatherPage';
import { NavigationPage } from './pages/NavigationPage';
import { TranslatePage } from './pages/TranslatePage';
import { EmergencyPage } from './pages/EmergencyPage';
import { MyTripsPage } from './pages/MyTripsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Protected Route Guard: Redirects to /login if no active user/guest session
const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { demoUser } = useTrip();
  const location = useLocation();

  if (!demoUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

// Login Route Guard: Redirects to / if user is already logged in
const LoginRoute: React.FC = () => {
  const { demoUser } = useTrip();

  if (demoUser) {
    return <Navigate to="/" replace />;
  }

  return <LoginPage />;
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Public Login Route Fallback */}
          <Route path="/login" element={<LoginRoute />} />

          {/* Mandatory 5-Screen Workflow (Protected by RequireAuth) */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <LandingPage />
              </RequireAuth>
            }
          />
          <Route
            path="/plan/preferences"
            element={
              <RequireAuth>
                <PreferencesPage />
              </RequireAuth>
            }
          />
          <Route
            path="/plan/processing"
            element={
              <RequireAuth>
                <ProcessingPage />
              </RequireAuth>
            }
          />
          <Route
            path="/plan/review"
            element={
              <RequireAuth>
                <ReviewPage />
              </RequireAuth>
            }
          />
          <Route
            path="/plan/confirmation"
            element={
              <RequireAuth>
                <ConfirmationPage />
              </RequireAuth>
            }
          />

          {/* Supporting Tourism Pages */}
          <Route
            path="/destinations"
            element={
              <RequireAuth>
                <ExploreDestinationsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/transport"
            element={
              <RequireAuth>
                <TransportPage />
              </RequireAuth>
            }
          />
          <Route
            path="/accommodations"
            element={
              <RequireAuth>
                <AccommodationsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/weather"
            element={
              <RequireAuth>
                <WeatherPage />
              </RequireAuth>
            }
          />
          <Route
            path="/navigation"
            element={
              <RequireAuth>
                <NavigationPage />
              </RequireAuth>
            }
          />
          <Route
            path="/translate"
            element={
              <RequireAuth>
                <TranslatePage />
              </RequireAuth>
            }
          />
          <Route
            path="/emergency"
            element={
              <RequireAuth>
                <EmergencyPage />
              </RequireAuth>
            }
          />
          <Route
            path="/my-trips"
            element={
              <RequireAuth>
                <MyTripsPage />
              </RequireAuth>
            }
          />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating Circular Emergency SOS Button */}
      <FloatingSOSButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <TripProvider>
      <Router>
        <ScrollToTop />
        <MainLayout />
      </Router>
    </TripProvider>
  );
};

export default App;
