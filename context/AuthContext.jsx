"use client";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext=createContext();

export default function AuthContextProvider({children}){
    const [user,setUser]=useState(undefined);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null);
            }
        })
        return ()=>unsubscribe();
    },[])
    return(
        <AuthContext.Provider value={{
            user,isLoading: user===undefined
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth=()=>{
    return useContext(AuthContext);
}
