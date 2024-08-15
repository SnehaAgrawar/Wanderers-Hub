import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Bookings from './components/Bookings';
import PackageDetail from './components/PackageDetail';
import DestinationPackages from './components/DestinationPackages'
import GuideDashBoard from './components/GuideDashBoard'
import Destinations from './components/Destinations';
import Invoice from './components/Invoice';
import Login from './components/Login';
import Payment from './components/Payment';
import Reviews from './components/Reviews';
import AdminDashboard from './components/AdminDashboard';


function App() {
    return (
        <Router>
            <Routes>
                {/* Define the route for the registration page */}
                <Route path='/wanderershub/home' element={<Home />}/>
                <Route path="/wanderershub/register" element={<UserRegistration />} />
                <Route path="/wanderershub/bookings" element={<Bookings />} />
                <Route path="/wanderershub/details" element={<PackageDetail />} />
                <Route path="/wanderershub/packages" element={<DestinationPackages />} />
                <Route path="/wanderershub/guide" element={<GuideDashBoard />} />
                <Route path="/wanderershub/admin" element={<AdminDashboard />} />
                <Route path="/wanderershub/reviews" element={<Reviews />} />
                <Route path="/wanderershub/destinations" element={<Destinations />} />
                <Route path="/wanderershub/login" element={<Login />} />
                <Route path="/wanderershub/invoice" element={<Invoice />} />
                <Route path="/wanderershub/payment" element={<Payment />} />



                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;
