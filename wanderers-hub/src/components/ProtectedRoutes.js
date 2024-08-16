import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { auth } = useAuth();

    console.log("ProtectedRoute:", auth);

    if (!auth.token) {
        return <Navigate to="/wanderershub/login" replace />;
    }

    if (auth.role !== role) {
        console.warn(`Role mismatch: expected ${role}, got ${auth.role}`);

        switch (auth.role) {
            case 'ADMIN':
                return <Navigate to="/wanderershub/admin" replace />;
            case 'GUIDE':
                return <Navigate to="/wanderershub/guide" replace />;
            case 'CLIENT':
                return <Navigate to="/wanderershub/home" replace />;
            default:
                return <Navigate to="/wanderershub/login" replace />;
        }
    }

    return children;
};

export default ProtectedRoute;
