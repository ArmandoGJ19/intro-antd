import React, {useState, useEffect, createContext} from 'react';
import {storageController} from '../services/token';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const {children} = props;

    useEffect(() => {
        getSession();
    }, []);
    const getSession = async () => {
        const token = await storageController.getToken();
        console.log("token -->", token);
    }
    const login = async (token) => {
        try {
            console.log("token obtenido:", token);
            await storageController.setToken(token);

        } catch (error) {
            console.log(error);
        }
    }
    const data = {
        user: "Armando",
        login,
        logout: console.log("Logout"),
        updateUser: console.log("updateUser"),
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}