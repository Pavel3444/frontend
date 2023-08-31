import React, {createContext, useContext, useState} from "react";
import {AuthContextValue, AuthProviderProps} from "../types";

const AuthContext = createContext<AuthContextValue | null>(null);
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<string | null>(()=>{
        return  localStorage.getItem('user') || null;
    });
    const signIn = (newUser: string, callback: ()=>void) =>{
        setUser(newUser);
        localStorage.setItem('user', newUser);
        callback();
    }
    const signOut = (callback: ()=>void) =>{
        setUser(null);
        localStorage.removeItem('user');
        callback();
    }
    const value: AuthContextValue = {
        user,
        signIn,
        signOut,
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
            </AuthContext.Provider>
    )
}