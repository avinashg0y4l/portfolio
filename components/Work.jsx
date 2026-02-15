"use client";
import { assets } from "@/lib/assets";
import { workData } from "@/lib/workData";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaGlobe, FaTimes } from "react-icons/fa";

import Link from "next/link";
const MotionLink = motion(Link);
const Work = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Section Headings */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in front-end development.
      </motion.p>

      {/* Work Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.slice(0, 4).map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-md hover:shadow-xl dark:shadow-gray-800 transition-all duration-500 overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Overlay Gradient for better text readability */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

            {/* Info Box */}
            <div className="bg-white w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-6 flex items-center justify-between shadow-lg duration-500 group-hover:bottom-7 group-hover:scale-105">
              <div className="flex-1 min-w-0 pr-4">
                <h2 className="font-semibold text-lg text-gray-900 truncate">{project.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {project.description}
                </p>
              </div>
              <div className="border rounded-full border-gray-900 w-10 h-10 flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-colors duration-300">
                <img
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <MotionLink
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="/projects"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <img
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </MotionLink>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-[90%] relative shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    className="px-4 py-2 flex items-center gap-2 rounded-md bg-lime-500 text-black font-semibold hover:bg-lime-400 transition"
                  >
                    <FaGlobe /> Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="px-4 py-2 flex items-center gap-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;
