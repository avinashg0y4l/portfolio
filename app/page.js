'use client';
import { useEffect, useState } from "react";

import About from "../components/About";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";
import Certificates from "../components/Certificates";
import Timeline from "../components/Timelineupdate";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (storedTheme === null && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

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
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />

      <section id="about">
        <About isDarkMode={isDarkMode} />
      </section>

      <section id="experience">
        <ExperienceTimeline isDarkMode={isDarkMode} />
      </section>

      <section id="services">
        <Services isDarkMode={isDarkMode} />
      </section>

      <section id="work">
        <Work isDarkMode={isDarkMode} />
      </section>

      <section id="certifications">
        <Certificates isDarkMode={isDarkMode} />
      </section>

      <section id="contact">
        <Contact isDarkMode={isDarkMode} />
      </section>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
