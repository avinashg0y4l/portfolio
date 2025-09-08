"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const router = useRouter();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  // ✅ Scroll helper
  const handleScrollTo = (id) => {
    if (typeof window !== "undefined") {
      // If not on homepage, go there first
      if (window.location.pathname !== "/") {
        router.push("/#" + id);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMenu();
  };

  // ✅ Dark mode preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) setIsDarkMode(savedTheme === "dark");
    }
  }, [setIsDarkMode]);

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`w-full fixed px-5 py-4 flex items-center justify-between z-50`}>
        {/* Logo */}
        <Link href="/">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          <li><button onClick={() => handleScrollTo("top")}>Home</button></li>
          <li><button onClick={() => handleScrollTo("about")}>About me</button></li>
          <li><button onClick={() => handleScrollTo("services")}>Services</button></li>
          <li><button onClick={() => handleScrollTo("work")}>My Work</button></li>
          <li><Link href="/certifications">Certifications</Link></li>
          <li><button onClick={() => handleScrollTo("contact")}>Contact me</button></li>
        </ul>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className="md:hidden fixed top-0 right-0 w-64 h-screen bg-white">
          <li><button onClick={() => handleScrollTo("top")}>Home</button></li>
          <li><button onClick={() => handleScrollTo("about")}>About me</button></li>
          <li><button onClick={() => handleScrollTo("services")}>Services</button></li>
          <li><button onClick={() => handleScrollTo("work")}>My Work</button></li>
          <li><Link href="/certifications" onClick={closeMenu}>Certifications</Link></li>
          <li><button onClick={() => handleScrollTo("contact")}>Contact me</button></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
