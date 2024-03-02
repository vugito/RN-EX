import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await AsyncStorage.getItem('users');
                if (usersData) {
                    setUsers(JSON.parse(usersData));
                }
            } catch (error) {
                console.error('Error retrieving users:', error);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const saveUsers = async () => {
            try {
                await AsyncStorage.setItem('users', JSON.stringify(users));
            } catch (error) {
                console.error('Error saving users:', error);
            }
        };

        saveUsers();
    }, [users]);

    const registerUser = (username, password) => {
        const newUser = { username, password };
        setUsers([...users, newUser]);
    };

    const login = (username, password) => {
        const foundUser = users.find(user => user.username === username && user.password === password);
        if (foundUser) {
            setCurrentUser(foundUser);
        } else {
            console.error('Invalid username or password');
        }
    };

    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ users, currentUser, registerUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
