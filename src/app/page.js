import Image from "next/image";

import Button from './ui/button.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-14 bg-[#16161E] max-w-6xl">
      <Button link="google.com" text='google'></Button>
      <h2 className= "text-4xl font-bold py-14 text-[#F1F1F1]"> Here at NorthStar, we help guide the way to a more organized life and a better you..</h2>

      <h1 className= " text-3xl font-bold italic py-5 text-[#F1F1F1] opacity-85"> 
        The North Star has been a steadfast guide for humanity for centuries. Its unwavering position in the night sky has symbolized constancy and provided crucial guidance for all mankind.
        Weve reinvented the North Star, now you can navigate the daily challenges of modern life just like our ancestors. 
      </h1>

      <img src="/LogoStuff.png"/>
    </main>
  );
}
