"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { assets } from "@/lib/assets"; // adjust path if needed

const SubNavbar = () => {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const isDark = resolvedTheme === 'dark';

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
          src={isDark ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-28 mr-6"
        />
      </div>

      {/* ✅ Actions */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="p-2 rounded-full border border-gray-400 dark:border-gray-600 
          hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <img
            src={isDark ? assets.sun_icon : assets.moon_icon}
            alt="Theme Toggle"
            className="w-6"
          />
        </button>

        {/* Close Button - Visible on all devices now */}
        <div
          onClick={() => router.push("/")}
          className='cursor-pointer flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full ml-2 font-Ovo dark:border-white/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition'
        >
          <span className="hidden sm:inline">Close</span>
          <img src={isDark ? assets.close_white : assets.close_black} alt="Close" className='w-3' />
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
