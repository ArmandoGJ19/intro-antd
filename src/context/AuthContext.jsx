import React, {useState, useEffect, createContext} from 'react';
import {storageController} from '../services/token';
import {userService} from "../services/users.js";
import {tokenExpired} from "../utils/tokenExpired.js";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const {children} = props;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getSession();
    }, []);
    const getSession = async () => {
        const token = await storageController.getToken();
        if (!token) {
            logout()
            setLoading(false);
            return;
        }
        if (tokenExpired(token)) {
            logout()
            setLoading(false);
            return;
        }else{
            login(token);
        }

        // console.log("token -->", token);
        setLoading(false);

    }
    const login = async (token) => {
        try {
            console.log("token obtenido:", token);
            await storageController.setToken(token);
            const response = await userService.getMe(token);
            setUser(response);
            setLoading(false);
            console.log(response);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const logout = async () => {
        try {
            await storageController.removeToken();
            setUser(null);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    const data = {
        user,
        login,
        logout,
        updateUser: console.log("updateUser"),
    };
    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}