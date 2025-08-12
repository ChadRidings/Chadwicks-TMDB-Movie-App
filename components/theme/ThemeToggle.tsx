"use client";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    // Check localStorage or system preferences
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const enabled = stored === "dark" || (!stored && prefersDark);
        setIsDark(enabled);
        document.documentElement.classList.toggle("dark", enabled);
    }, []);

    // When user toggles theme
    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <span
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:underline text-xl cursor-pointer"
            title="Toggle Dark/Light Theme"
        >
            <i className={isDark ? "bi bi-eye" : "bi bi-eye-fill"}></i>
        </span>
    );
};

export default ThemeToggle;
