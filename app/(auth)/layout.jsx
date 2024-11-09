"use client";

import AuthContextProvider from "@/context/authContext";

export default function Layout({children}){
    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}