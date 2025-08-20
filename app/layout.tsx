import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header/Header";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chadwick's TMDB Movie App",
    description: "NextJS App Boilerplate created by Chad Ridings",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
            >
                <Header />
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
