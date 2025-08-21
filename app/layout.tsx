import type { Metadata } from "next";
import { Geist, Geist_Mono, Smooch_Sans } from "next/font/google";
import Header from "../components/header/Header";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/Footer";
import "../styles/globals.css";

// Import Custom Fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const smoochSans = Smooch_Sans({
    variable: "--font-smooch-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chadwick's TMDB Movie App",
    description: "NextJS App Boilerplate created by Chad Ridings",
    keywords: [
        "NextJS",
        "React",
        "TMDB",
        "Movie App",
        "Chadwick's TMDB Movie App",
        "Chad Ridings",
    ],
    authors: [{ name: "Chad Ridings", url: "https://github.com/ChadRidings" }],
    creator: "Chad Ridings",
    robots: {
        index: true,
        follow: true,
    },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${smoochSans.variable} antialiased bg-black`}
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
