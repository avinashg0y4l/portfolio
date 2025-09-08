'use client';
import { useEffect, useState } from "react";

import About from "../components/About.jsx";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
import Work from "../components/Work.jsx";
import Certificates from "../components/Certificates.jsx";
import Timeline from "../components/Timelineupdate.jsx";


export default function Home() {
  // Initialize state: default to light mode, mark as not mounted initially
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Effect to determine the correct theme based on user preference/system
  // Runs only once on the client after the component mounts
  useEffect(() => {
    // Mark the component as mounted when this effect runs on the client
    setIsMounted(true);

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme'); // Use getItem

    // Determine the effective theme state
    if (storedTheme === 'dark' || (storedTheme === null && prefersDark)) { // Check explicitly for null if not set
      setIsDarkMode(true);
    } else {
      // Covers storedTheme === 'light' or (storedTheme === null && !prefersDark)
      setIsDarkMode(false);
    }
    // Empty dependency array ensures this runs only once after initial mount
  }, []);

  // Effect to apply the theme class to the HTML element and save the preference
  // Runs only after mount and whenever isDarkMode or isMounted changes
  useEffect(() => {
    // Prevent execution until the component is mounted on the client
    if (!isMounted) {
      return;
    }

    // Apply the theme class and update localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Use setItem
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Store 'light' explicitly
      // Or use localStorage.removeItem('theme'); if you prefer no value for light mode
    }
    // Depend on both isDarkMode and isMounted
  }, [isDarkMode, isMounted]);

  // --- Render the UI ---
  // During the initial render (server-side and first client render before useEffect runs),
  // isDarkMode will be its initial value (false).
  // After mounting, the useEffects will run and update isDarkMode if needed,
  // triggering a re-render with the correct theme. This avoids hydration errors.
  // A brief visual flash might occur if the user's preference differs from the default.

  // Render null or a loading state *only* if absolutely necessary and you handle
  // the layout shift implications. Rendering with the default state is usually preferred
  // for avoiding hydration errors.
  // if (!isMounted) {
  //   return null; // Or a loading spinner, but beware of layout shifts
  // }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
     {/* <Timeline isDarkMode={isDarkMode} />*/}
      <ExperienceTimeline isDarkMode={isDarkMode} /> 
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Certificates isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}