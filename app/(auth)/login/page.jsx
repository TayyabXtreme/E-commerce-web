"use client";

import { useAuth } from "@/context/authContext";
import { auth } from "@/lib/firebase";
import { Button } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Login(){
    const {user}=useAuth();
    const router=useRouter();
    useEffect(()=>{
        if(user){
            router.push("/dashboard");
        }
    },[user])
    return (
        <main
        className="flex items-center justify-center w-full bg-gray-300 md:p-24 p-10 min-h-screen"
        >
            <section className="flex flex-col gap-3">
                <div className="flex">
            <img src="/logo.avif" alt="logo" className="h-20 mx-auto" />
                </div>
            <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-xl md:min-w-[440px] w-full">
                <h1 className="text-xl font-bold">Login with Email</h1>
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                       
                        <input type="email" id="user-email" placeholder="Enter your email" className="border p-2 rounded-md focus:outline-none" />
                        <input type="password" id="user-password" placeholder="Enter your password" className="border p-2 rounded-md focus:outline-none" />
                        <Button color="primary">Login</Button>

                    </div>
                    
                </form>
                <div className="flex justify-between">
                    <Link href="/signup">
                    <button
                    className="font-semibold text-blue-600 text-sm"
                    >New? Create an account</button>
                    </Link>
                    <Link href="/forgot-password">
                    <button
                    className="font-semibold text-blue-600 text-sm"
                    >forgot password?</button>
                    </Link>
                </div>
                <hr />
                <SignInWithGoogleComponent />

            </div>


            </section>
        </main>
    )
}

function SignInWithGoogleComponent(){
    const [isLoading,setIsLoading]=useState(false);
    const handleLogin=async ()=>{
        setIsLoading(true);
        try{
            const user=await signInWithPopup(auth,new GoogleAuthProvider())
            
        }catch(error){
           toast.error(error.message);
        }finally{
            setIsLoading(false);
        }
        
    }
    return(
        <Button 
        isDisabled={isLoading}
        isLoading={isLoading}
        onClick={handleLogin}>Sign In with Google</Button>
    )
}
