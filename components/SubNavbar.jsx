"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets"; // adjust path if needed

const SubNavbar = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // --- Mount & Theme Detection ---
  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  // --- Apply Dark Mode ---
  useEffect(() => {
    if (!isMounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isMounted]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        bg-white/60 dark:bg-darkTheme/80 backdrop-blur-md shadow-sm`}
    >
      {/* ✅ Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-28 mr-6"
        />
      </div>

      {/* ✅ Actions */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          className="p-2 rounded-full border border-gray-400 dark:border-gray-600 
          hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <img
            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
            alt="Theme Toggle"
            className="w-6"
          />
        </button>

        {/* Close Button */}
        <button
          onClick={() => router.push("/")}
          className="p-2 rounded-full border border-gray-400 dark:border-gray-600 
          hover:bg-red-100 dark:hover:bg-red-600 transition"
        >
          <span className="text-lg font-bold text-gray-700 dark:text-gray-200">
            ✕
          </span>
        </button>
      </div>
    </nav>
  );
};

export default SubNavbar;
