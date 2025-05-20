"use client";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function App({ session, children }) {
  // Dark Mode Toggle
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dark = localStorage.getItem("theme") === "dark";
      document.documentElement.classList.toggle("dark", dark);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <SessionProvider session={session}>
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 shadow"
      >
        Dark Mode wechseln
      </button>
      {children}
    </SessionProvider>
  );
}
