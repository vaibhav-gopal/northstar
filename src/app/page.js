"use client";
import { useUser } from '@auth0/nextjs-auth0/client'; // used to save state of current user, accessed using the useUser() hook to access user details

import Button from './ui/button.js';
import { useEffect } from "react";
import { redirect } from 'next/navigation'

export default function Home() {

  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      redirect('/dashboard');
    }
  }, [user]);

  return (
    <div className="flex mx-auto min-h-screen flex-col items-center justify-start px-14 max-w-6xl">
      <h2 className= "text-4xl font-bold py-14 text-[#F1F1F1]"> Here at NorthStar, we help guide the way to a more organized life and a better you..</h2>
      <h1 className= " text-3xl font-bold italic py-10 text-[#F1F1F1] opacity-85"> 
        The North Star has been a steadfast guide for humanity for centuries. Its unwavering position in the night sky has symbolized constancy and provided crucial guidance for all mankind.
        Weve reinvented the North Star, now you can navigate the daily challenges of modern life just like our ancestors. 
      </h1>
      <img className = "py-20" src="/LogoStuff.png"/>
      <div className="flex flex-row justify-center gap-24 my-24">
        <Button link="/api/auth/login" text='Start Your Journey'></Button>
      </div>
    </div>
  );
}
