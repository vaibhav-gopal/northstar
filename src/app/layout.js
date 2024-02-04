import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/topNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NorthStar",
  description: "Optimize your life NorthStar, a motivational utility app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#040405] w-full h-fit overflow-auto">
          <TopNav/>
          {children}
        </main>
      </body>
    </html>
  );
}
