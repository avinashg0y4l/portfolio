// components/ExperienceTimeline.jsx
"use client";

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { experiencesData } from "../assets/experienceData";
import { FaStar } from "react-icons/fa";

// --- Experience Card with motion effect ---
const ExperienceCard = ({ experience, isDarkMode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const cardBackgroundColor = isDarkMode ? "#1e293b" : "#ffffff";
  const cardTextColor = isDarkMode ? "#e2e8f0" : "#334155";
  const cardArrowColor = cardBackgroundColor;
  const dateTextColorClass = isDarkMode ? "text-gray-400" : "text-gray-600";
  const titleColorClass = isDarkMode ? "text-white" : "text-gray-900";
  const companyColorClass = isDarkMode ? "text-gray-300" : "text-gray-700";
  const pointsColorClass = isDarkMode ? "text-gray-300" : "text-gray-600";

  const IconComponent = experience.icon || FaStar;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: cardBackgroundColor,
        color: cardTextColor,
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)",
        borderRadius: "0.5rem",
      }}
      contentArrowStyle={{ borderRight: `7px solid ${cardArrowColor}` }}
      date={experience.date + (experience.location ? ` • ${experience.location}` : "")}
      dateClassName={`!text-sm !opacity-90 ${dateTextColorClass}`}
      iconStyle={{ background: experience.iconBg || (isDarkMode ? "#334155" : "#cbd5e1"), color: "#fff", boxShadow: "none" }}
      icon={<IconComponent />}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      >
        <h3 className={`text-xl font-bold tracking-wide ${titleColorClass}`}>{experience.title}</h3>
        <p className={`text-base font-semibold !mt-1 ${companyColorClass}`} style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, idx) => (
            <li key={idx} className={`text-[14px] pl-1 tracking-normal ${pointsColorClass}`}>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

// --- Main Timeline Component ---
const ExperienceTimeline = ({ isDarkMode }) => {
  const timelineLineColor = isDarkMode ? "rgba(100, 116, 139, 0.5)" : "rgba(156, 163, 175, 0.7)";
  const endIconBg = isDarkMode ? "rgb(71, 85, 105)" : "rgb(156, 163, 175)";

  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Experiences
        </h2>

        <VerticalTimeline lineColor={timelineLineColor}>
          {experiencesData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} isDarkMode={isDarkMode} />
          ))}

          <VerticalTimelineElement iconStyle={{ background: endIconBg, color: "#fff" }} icon={<FaStar />} />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
