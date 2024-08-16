import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token'),
        user: localStorage.getItem('username'),
        role: localStorage.getItem('role'),
    });

    const login = (token, user, role, navigate) => {
        setAuth({ token, user, role });
        localStorage.setItem('token', token);
        localStorage.setItem('username', user);
        localStorage.setItem('role', role);

        console.log("Login:", { token, user, role });

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
    };

    const logout = (navigate) => {
        setAuth({ token: null, user: null, role: null });
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        navigate('/wanderershub/login', { replace: true });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
