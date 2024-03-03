import React, { createContext, useState, useContext } from 'react';
import authService from "../api-services/AuthService"

// fixed {}
const AuthContext = createContext({});

const AuthService=new authService();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const requestBody={
                "email":email,
                "password":password
            }
            const response=AuthService.Login(requestBody)
            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const register = async (name,email, password) => {
        try {
            const requestBody={
                "name":name,
                "email":email,
                "password":password
            }
            const response=AuthService.Register(requestBody)
            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
            } else {
                throw new Error(data.message || 'Register failed');
            }
        } catch (error) {
            console.error('Register error:', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        // fixed {register}
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
