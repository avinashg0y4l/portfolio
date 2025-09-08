"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const RoadmapJourney = () => {
  const milestones = [
    { id: 1, title: "Leading Self", desc: "Effective leadership for faster success", icon: "🚀" },
    { id: 2, title: "Leading Others", desc: "Collaborating to achieve results", icon: "🤝" },
    { id: 3, title: "Leading Managers", desc: "Build leadership skills and strategy", icon: "📊" },
    { id: 4, title: "Leading Functions", desc: "Ability to lead strategically", icon: "⚙️" },
    { id: 5, title: "Leading Organisation", desc: "Maximize leadership power for organisation", icon: "🏢" },
  ];

  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [pathD, setPathD] = useState("");
  const [milestonePositions, setMilestonePositions] = useState([]);

  // Update path based on screen width
  useEffect(() => {
    const updatePath = () => {
      if (window.innerWidth < 640) {
        // Small screens → vertical wave
        setPathD("M 10 5 C 20 25, 40 20, 50 40 C 60 60, 40 70, 50 90");
      } else {
        // Larger screens → diagonal wave (top-left → bottom-right)
        setPathD("M 5 5 C 20 20, 40 10, 50 30 C 60 50, 80 40, 95 95");
      }
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  // Calculate milestone positions along the path
  useEffect(() => {
    if (!pathRef.current || !pathD) return;

    const pathLength = pathRef.current.getTotalLength();
    const positions = milestones.map((_, idx) => {
      const fraction = idx / (milestones.length - 1);
      return pathRef.current.getPointAtLength(fraction * pathLength);
    });

    setMilestonePositions(positions);
  }, [pathD]);

  // Move dot on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current || !sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight - windowHeight) {
        const localScroll = scrollY - sectionTop;
        const localProgress = localScroll / (sectionHeight - windowHeight);

        const pathLength = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(localProgress * pathLength);

        setProgress(localProgress);
        setDotPos({ x: point.x, y: point.y });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative w-full px-[6%] py-16 bg-white dark:bg-gray-900"
      style={{ height: "150vh" }}
    >
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-12 sticky top-10">
        Leadership Development Roadmap
      </h2>

      <div className="relative w-full max-w-5xl mx-auto sticky top-32">
        <svg
          className="w-full h-[600px] sm:h-[750px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Road background */}
          <path
            ref={pathRef}
            d={pathD}
            stroke="#555"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          {/* Road center dashed line */}
          <path
            d={pathD}
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />

          {/* Moving dot */}
          <motion.circle
            cx={dotPos.x}
            cy={dotPos.y}
            r="2.5"
            fill="red"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

        {/* Milestones appear at path points */}
        {milestones.map((milestone, idx) => {
          if (!milestonePositions[idx]) return null;

          const { x, y } = milestonePositions[idx];
          const threshold = idx / (milestones.length - 1);
          const isVisible = progress >= threshold - 0.02;

          return (
            <motion.div
              key={milestone.id}
              className={`absolute w-40 sm:w-56 p-4 rounded-xl border shadow-md bg-white dark:bg-gray-800
                ${idx % 2 === 0 ? "translate-x-[-110%]" : "translate-x-[10%]"} 
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%) ${idx % 2 === 0 ? "translateX(-110%)" : "translateX(10%)"}`,
              }}
            >
              <h3 className="text-base sm:text-lg font-semibold flex items-center text-gray-800 dark:text-white">
                <span className="mr-2">{milestone.icon}</span>
                {milestone.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                {milestone.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default RoadmapJourney;
