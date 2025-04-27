// components/ExperienceTimeline.jsx
"use client"; // Needed for CSS import and potential hooks in the library

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the required CSS

// Import your data from the assets folder
import { experiencesData } from "../assets/experienceData"; // Adjust path if needed

// Import a default icon or specific icons if needed
import { FaStar } from "react-icons/fa"; // Example default/fallback icon

// --- Component for a single Experience Card ---
// Accept isDarkMode prop if you pass it from the parent
const ExperienceCard = ({ experience, isDarkMode }) => {
  // Basic check: ensure experience and icon exist to prevent errors
  if (!experience) {
    return null; // Don't render if data is missing
  }
  // Get the component type from the props, or use FaStar as fallback
  const IconComponent = experience.icon || FaStar;

  // --- Define Light/Dark Mode styles for the card ---
  // *** CRITICAL: ADJUST these colors to match YOUR portfolio's theme ***
  const cardBackgroundColor = isDarkMode ? "#1e293b" : "#ffffff"; // Example: Dark Slate vs White
  const cardTextColor = isDarkMode ? "#e2e8f0" : "#334155"; // Example: Light Slate vs Dark Slate
  const cardArrowColor = cardBackgroundColor; // Arrow should match card background
  const dateTextColorClass = isDarkMode ? "text-gray-400" : "text-gray-600"; // Adjust date text color
  const titleColorClass = isDarkMode ? "text-white" : "text-gray-900"; // Adjust title color
  const companyColorClass = isDarkMode ? "text-gray-300" : "text-gray-700"; // Adjust company color
  const pointsColorClass = isDarkMode ? "text-gray-300" : "text-gray-600"; // Adjust points text color


  return (
    <VerticalTimelineElement
      contentStyle={{
        background: cardBackgroundColor, // Use dynamic background
        color: cardTextColor,          // Use dynamic text color
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Keep or adjust shadow
        borderRadius: '0.5rem',
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${cardArrowColor}`, // Use dynamic arrow color
      }}
      date={experience.date + (experience.location ? `  •  ${experience.location}` : '')}
      dateClassName={`!text-sm !opacity-90 ${dateTextColorClass}`} // Use dynamic text class
      iconStyle={{
         background: experience.iconBg || (isDarkMode ? "#334155" : "#cbd5e1"), // Use iconBg or dynamic default
         color: "#fff",
         boxShadow: 'none',
      }}
      icon={<IconComponent />}
    >
      <div>
        <h3 className={`text-xl font-bold tracking-wide ${titleColorClass}`}>
          {experience.title}
        </h3>
        <p
          className={`text-base font-semibold !mt-1 ${companyColorClass}`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-[14px] pl-1 tracking-normal ${pointsColorClass}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


// --- Main Timeline Component ---
// Accept isDarkMode prop to pass down to ExperienceCard
const ExperienceTimeline = ({ isDarkMode }) => {
  // *** CRITICAL: ADJUST timeline colors to match YOUR portfolio's theme ***
  const timelineLineColor = isDarkMode ? "rgba(100, 116, 139, 0.5)" : "rgba(156, 163, 175, 0.7)"; // Example: Slate vs Gray
  const endIconBg = isDarkMode ? 'rgb(71, 85, 105)' : 'rgb(156, 163, 175)'; // Example: Slate-600 vs Gray-400


  return (
    // REMOVED explicit background classes (bg-gray-100 dark:bg-[#0f172a])
    // It will now inherit background from parent (e.g., <main> in page.jsx)
    <section id="experience" className="py-16 md:py-24 scroll-mt-20"> {/* Added scroll-mt */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Experiences
        </h2>

        <div className="mt-12">
          <VerticalTimeline
            lineColor={timelineLineColor} // Use dynamic line color
          >
            {experiencesData.map((experience) => (
              <ExperienceCard
                key={`experience-${experience.id}`}
                experience={experience}
                isDarkMode={isDarkMode} // Pass the dark mode state down
              />
            ))}

            {/* Optional: Add a final "start" or "end" icon node */}
            <VerticalTimelineElement
               iconStyle={{ background: endIconBg, color: '#fff' }} // Use dynamic background
               icon={<FaStar />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;