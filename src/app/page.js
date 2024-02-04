import Image from "next/image";

import Button from './ui/button.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button link="google.com" text='google'></Button>
    </main>
  );
}
