import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import GuideDashBoard from './components/GuideDashBoard';
import UserRegistration from './components/UserRegistration';
import Login from './components/Login';
import Bookings from './components/Bookings';
import PackageDetail from './components/PackageDetail';
import DestinationPackages from './components/DestinationPackages';
import Destinations from './components/Destinations';
import Invoice from './components/Invoice';
import Payment from './components/Payment';
import Reviews from './components/Reviews';
import About from './components/About';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wanderershub/home" element={<ProtectedRoute role="CLIENT"><Home /></ProtectedRoute>} />
          <Route path="/wanderershub/admin" element={<ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/wanderershub/guide" element={<ProtectedRoute role="GUIDE"><GuideDashBoard /></ProtectedRoute>} />
          <Route path="/wanderershub/register" element={<UserRegistration />} />
          <Route path="/about" element={<About />} />
          <Route path="/wanderershub/login" element={<Login />} />
          <Route path="/wanderershub/destinations" element={<Destinations />} />
          <Route path="/wanderershub/bookings/:pkgId" element={<Bookings />} />
          <Route path="/wanderershub/package/:pkgId" element={<PackageDetail />} />
          <Route path="/invoice/:bookingId" element={<Invoice />} /> {/* Consistent parameter name */}
          <Route path="/wanderershub/payment/:bookingId" element={<Payment />} /> {/* Consistent parameter name */}
          <Route path="/wanderershub/reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
