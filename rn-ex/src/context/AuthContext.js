import React, {createContext, useState, useContext, useEffect} from 'react';
import AuthServices from "../api-services/AuthServices"
import AsyncStorage from '@react-native-async-storage/async-storage';

// fixed {}
const AuthContext = createContext({});

const AuthService= new AuthServices();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const login = async (email, password) => {
        try {
            const requestBody= {
                email: email,
                password: password
            }

            const response= await AuthService.login(requestBody)


            const data = await response.json();

            console.log(data)

            if (response.ok) {

                const user={name:data.name, email:data.email}
                setUser(user);
                await AsyncStorage.setItem('token', JSON.stringify(data.jwt));
                await AsyncStorage.setItem('user', JSON.stringify(user));

            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const register = async (name, email, password) => {
        try {
            const requestBody={
                "name":name,
                "email":email,
                "password":password
            }
            const response= await AuthService.register(requestBody)
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

    const getUserToken = async () => {
        const token= await AsyncStorage.getItem('token');
        console.log("Token => ", token);
        return token;
    }

    const getUser=async()=>{
        const resUser=await AsyncStorage.getItem('user');
        console.log("resUser: ",resUser);
        if(resUser) {
            const userData = JSON.parse(resUser);
            console.log("userData: ",userData);
            setUser(userData);
        }
        return resUser;
    }

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        // fixed {register}
        <AuthContext.Provider value={{ user, login, logout, register,getUserToken,getUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

