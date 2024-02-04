"use client";

import { useUser } from '@auth0/nextjs-auth0/client'; // used to save state of current user, accessed using the useUser() hook to access user details
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'

export default function Dashboard() {
    const { user, error, isLoading } = useUser();
    const [goalList, setGoalList] = useState({
        "Get Shredded": false,
        "Get Rich": false,
        "Get Diabetes": true
    });

    return (
        user && (
            <div className="flex mx-auto min-h-screen flex-col items-center justify-start px-14 max-w-6xl">
                <h2 className= "text-4xl font-bold py-14 text-[#F1F1F1]">Welcome back, {user.name}!</h2>
                {
                    Object.keys(goalList).map((item, i) => {
                        <h1 key={i}>{i} : {goalList[i]}</h1>
                    })
                }
            </div>
        )
    );
}