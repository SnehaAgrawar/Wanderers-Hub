import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token'),
        user: localStorage.getItem('username'),
        role: localStorage.getItem('role'),
        userId: localStorage.getItem('userId'), // Add userId to the state
    });

    const login = async (token, user, role, navigate) => {
        try {
            // Fetch the user ID based on the username
            const response = await axios.get(`http://localhost:8080/users/username/${user}`);
            const userId = response.data.userId;

            // Update auth state and localStorage
            setAuth({ token, user, role, userId });
            localStorage.setItem('token', token);
            localStorage.setItem('username', user);
            localStorage.setItem('role', role);
            localStorage.setItem('userId', userId); // Store userId in localStorage

            console.log("Login:", { token, user, role, userId });

            if (role === 'ADMIN') {
                navigate('/wanderershub/admin', { replace: true });
            } else if (role === 'CLIENT') {
                navigate('/wanderershub/home', { replace: true });
            } else if (role === 'GUIDE') {
                navigate('/wanderershub/guide', { replace: true });
            } else {
                console.warn(`Unknown role: ${role}`);
                navigate('/wanderershub/login', { replace: true });
            }
        } catch (error) {
            console.error('Error fetching user ID:', error);
        }
    };

    const logout = (navigate) => {
        setAuth({ token: null, user: null, role: null, userId: null });
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('userId'); // Remove userId from localStorage
        navigate('/wanderershub/login', { replace: true });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
