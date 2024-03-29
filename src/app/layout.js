import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/topNav";
import { UserProvider } from '@auth0/nextjs-auth0/client'; // used to save state of current user, accessed with useUser() hook

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NorthStar",
  description: "Optimize your life NorthStar, a motivational utility app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <main className="bg-[#040405] w-full h-fit flow-root">
            <TopNav/>
            {children}
          </main>
        </body>
      </UserProvider>
    </html>
  );
}
