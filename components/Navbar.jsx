"use client";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/public/assets/assets";  
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  // Save theme in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, [isDarkMode]);

  // Load theme from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) setIsDarkMode(savedTheme === "dark");
    }
  }, [setIsDarkMode]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Header background" width={1200} height={400} className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Portfolio Logo"
            width={120}
            height={40}
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}>
          <li><Link className="font-Ovo" href="/#top">Home</Link></li>
          <li><Link className="font-Ovo" href="/#about">About me</Link></li>
          <li><Link className="font-Ovo" href="/#services">Services</Link></li>
          <li><Link className="font-Ovo" href="/#work">My Work</Link></li>
          <li><Link className="font-Ovo" href="/certifications">Certifications</Link></li>
          <li><Link className="font-Ovo" href="/#contact">Contact me</Link></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle theme"
              width={24}
              height={24}
              className="w-6"
            />
          </button>

          {/* Contact Button */}
          <Link
            href="/#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow"
              width={12}
              height={12}
              className="w-3"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ease-in-out dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              width={20}
              height={20}
              className="w-5 cursor-pointer"
            />
          </div>

          <li><Link className="font-Ovo" href="/#top" onClick={closeMenu}>Home</Link></li>
          <li><Link className="font-Ovo" href="/#about" onClick={closeMenu}>About me</Link></li>
          <li><Link className="font-Ovo" href="/#services" onClick={closeMenu}>Services</Link></li>
          <li><Link className="font-Ovo" href="/#work" onClick={closeMenu}>My Work</Link></li>
          <li><Link className="font-Ovo" href="/certifications" onClick={closeMenu}>Certifications</Link></li>
          <li><Link className="font-Ovo" href="/#contact" onClick={closeMenu}>Contact me</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
