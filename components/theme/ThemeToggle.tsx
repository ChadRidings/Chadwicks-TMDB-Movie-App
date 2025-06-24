"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Check localStorage or system preferences
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
    <button
      onClick={toggleTheme}
      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
