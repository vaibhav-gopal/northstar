"use client";

import { useUser } from '@auth0/nextjs-auth0/client'; // used to save state of current user, accessed using the useUser() hook to access user details
import { useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Dashboard() {
    const { user, error, isLoading } = useUser();

    useEffect(() => {
        if (!user) {
            alert("Please login first");
            redirect('/');
        }
    }, [user]);

    return (
        user && (
            <div className="flex mx-auto min-h-screen flex-col items-center justify-start px-14 max-w-6xl">
                <h2 className= "text-4xl font-bold py-14 text-[#F1F1F1]">Welcome back, {user.name}!</h2>
                
            </div>
        )
    );
}