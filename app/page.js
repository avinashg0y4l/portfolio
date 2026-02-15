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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <ExperienceTimeline />
      <Services />
      <Work />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}
