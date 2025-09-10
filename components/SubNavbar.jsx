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
        <div  onClick={() => router.push("/")} className='hidden cursor-pointer lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Close
          <img src={isDarkMode ? assets.close_white : assets.close_white} alt="" className='w-3'/></div>
      </div>
    </nav>
  );
};

export default SubNavbar;
