"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import { experiencesData } from "../lib/experienceData";

const ExperienceStepItem = ({ experience, index, isActive, onBecomeActive }) => {
  // Tighter center zone so items switch more deliberately as you scroll
  const { ref, inView } = useInView({
    threshold: 0.7,
    rootMargin: "-38% 0px -38% 0px",
  });

  useEffect(() => {
    if (inView) {
      onBecomeActive(index);
    }
  }, [inView, index, onBecomeActive]);

  const IconComponent = experience.icon || FaStar;

  return (
    <div
      ref={ref}
      onClick={() => onBecomeActive(index)}
      className={`border rounded-lg px-6 py-9 md:py-10 cursor-pointer transition-all duration-500 ${
        isActive
          ? "border-gray-700 bg-lightHover shadow-black dark:border-white dark:bg-darkHover dark:shadow-white"
          : "border-gray-400 opacity-75 hover:opacity-100 hover:bg-lightHover hover:shadow-black dark:border-white/30 dark:hover:bg-darkHover dark:hover:shadow-white"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 shrink-0 rounded-lg border border-gray-400 dark:border-white/30 flex items-center justify-center text-gray-700 dark:text-white">
          <IconComponent className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0">
          <span className="block text-xs text-gray-500 dark:text-white/60 font-Ovo mb-1">
            {experience.date}
            {experience.location ? ` • ${experience.location}` : ""}
          </span>
          <h3 className="text-lg font-medium text-gray-700 dark:text-white font-Ovo leading-snug">
            {experience.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-white/80 font-Ovo mt-0.5">
            {experience.company_name}
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiencesData[activeIndex] || experiencesData[0];
  const ActiveIcon = activeExp.icon || FaStar;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20 overflow-x-clip"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Journey
      </motion.h4>

      <div className="lg:sticky lg:top-20 z-20 py-4 bg-white/85 dark:bg-darkTheme/85 backdrop-blur-md">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mt-4 mb-2 font-Ovo text-gray-600 dark:text-white/80"
        >
          Hands-on engineering roles, research internships, and leadership milestones across hardware, embedded systems, and software.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 mb-10 items-start">
        {/* Left: Sticky details & image */}
        <div className="lg:col-span-7 lg:sticky lg:top-64 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp.id ?? activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="border border-gray-400 dark:border-white/30 rounded-lg px-8 py-10 bg-white/50 dark:bg-transparent backdrop-blur-sm"
            >
              {activeExp.image && (
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-300 dark:border-white/20 aspect-video">
                  <img
                    src={activeExp.image}
                    alt={activeExp.company_name || activeExp.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg border border-gray-400 dark:border-white/30 flex items-center justify-center text-gray-700 dark:text-white">
                  <ActiveIcon className="w-4 h-4" />
                </div>

                <span className="text-xs px-3 py-1 rounded-full border border-gray-400 dark:border-white/30 text-gray-600 dark:text-white/80 font-Ovo">
                  {activeExp.date}
                </span>
              </div>

              <h3 className="text-2xl font-Ovo text-gray-700 dark:text-white">
                {activeExp.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-white/80 font-Ovo mt-1 mb-5">
                {activeExp.company_name}
                {activeExp.location ? ` • ${activeExp.location}` : ""}
              </p>

              <ul className="list-disc ml-5 space-y-2.5">
                {activeExp.points?.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 leading-6 dark:text-white/80 font-Ovo"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: More vertical spacing (`space-y-10`) gives longer scroll travel per item */}
        <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
          {experiencesData.map((experience, idx) => (
            <ExperienceStepItem
              key={experience.id ?? idx}
              experience={experience}
              index={idx}
              isActive={activeIndex === idx}
              onBecomeActive={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;