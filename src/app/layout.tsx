import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import { Inter } from "next/font/google";
import tw from 'tailwind-styled-components'
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

const BodyContainer = tw.div`
  bg-slate-100 
  w-full flex justify-center
`

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <BodyContainer>
          <div className="overflow-hidden h-screen w-full max-w-[800px] flex flex-col">
            <Navigation />
            <div className="w-full flex-1 overflow-scroll">
              {children}
            </div>
            <div className="h-14" />
            <BottomNavigation />
          </div>
        </BodyContainer>
      </body>
    </html>
  );
}
