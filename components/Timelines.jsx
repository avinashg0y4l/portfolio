// components/HorizontalJourneySticky.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiencesData } from "../assets/experienceData";

const Milestone = ({ experience, isActive, isDarkMode }) => {
  const bgColor = isDarkMode ? "#1e293b" : "#ffffff";
  const textColor = isDarkMode ? "#e2e8f0" : "#334155";
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const companyColor = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <motion.div
      className="flex-shrink-0 w-64 p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
      style={{ background: bgColor, color: textColor }}
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h3 className={`text-lg font-bold ${titleColor}`}>{experience.title}</h3>
      <p className={`mt-1 font-semibold ${companyColor}`}>
        {experience.company_name} • {experience.date}
      </p>
    </motion.div>
  );
};

const HorizontalJourneySticky = ({ isDarkMode }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !innerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Calculate how much we have scrolled in the container
      const start = containerTop - windowHeight * 0.5;
      const end = containerTop + containerHeight - windowHeight * 0.5;
      const progress = Math.min(Math.max((scrollTop - start) / (end - start), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.floor(scrollProgress * experiencesData.length);

  return (
    <section
      ref={containerRef}
      className="py-40 scroll-mt-20 relative overflow-hidden"
      style={{ height: "120vh" }} // make it tall so scroll drives horizontal motion
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-gray-800 dark:text-white">
        My Journey
      </h2>

      <div className="sticky top-40">
        <div ref={innerRef} className="relative w-full overflow-hidden">
          {/* Timeline line */}
          <div className="absolute top-20 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600"></div>

          {/* Dot */}
          <motion.div
            className="absolute top-14 w-6 h-6 bg-blue-500 rounded-full z-10"
            style={{ left: `${scrollProgress * 100}%`, translateX: "-50%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          {/* Milestones horizontally */}
          <div className="flex gap-20 px-8 py-8">
            {experiencesData.map((exp, idx) => (
              <Milestone
                key={exp.id}
                experience={exp}
                isActive={idx <= activeIndex}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalJourneySticky;
