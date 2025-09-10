"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { experiencesData } from "../lib/experienceData";

const Milestone = ({ experience, isActive, isDarkMode }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-64 p-6 rounded-2xl border border-gray-400 
                 shadow-md cursor-pointer 
                 hover:-translate-y-1 duration-500
                 hover:bg-lightHover dark:hover:bg-darkHover/50
                 dark:border-white/50"
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold font-Ovo text-gray-800 dark:text-white">
        {experience.title}
      </h3>
      <p className="mt-2 text-sm font-Ovo text-gray-600 dark:text-white/80">
        {experience.company_name} • {experience.date}
      </p>
    </motion.div>
  );
};

const HorizontalJourneyPinned = ({ isDarkMode }) => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      if (
        scrollTop >= containerTop &&
        scrollTop <= containerTop + containerHeight
      ) {
        const progress =
          (scrollTop - containerTop) / (containerHeight - windowHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.floor(scrollProgress * experiencesData.length);

  return (
    <motion.section
      ref={containerRef}
      id="journey"
      className="relative w-full px-[12%] py-10 scroll-mt-20"
      style={{ height: "150vh" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="sticky top-24 text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80"
      >
        Timeline
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="sticky top-36 z-20 text-center text-5xl font-Ovo text-gray-800 dark:text-white"
      >
        My Journey
      </motion.h2>

      {/* Timeline */}
      <div className="sticky top-56">
        <div className="relative w-full overflow-hidden">
          {/* Timeline line */}
<div className="absolute top-56 left-0 w-full h-[2px] bg-gray-400 dark:bg-gray-600"></div>

{/* Moving Dot */}
<motion.div
  className="absolute top-[200px] w-6 h-6 bg-blue-500 rounded-full shadow-lg z-10"
  style={{ left: `${scrollProgress * 100}%`, translateX: "-50%" }}
  transition={{ type: "spring", stiffness: 100, damping: 20 }}
/>

          {/* Milestones */}
          <div className="flex gap-20 px-8 py-12">
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

      {/* Spacer */}
      <div style={{ height: "50vh" }}></div>
    </motion.section>
  );
};

export default HorizontalJourneyPinned;
