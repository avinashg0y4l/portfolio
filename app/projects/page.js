"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { workData } from "@/assets/workData";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkPage = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // --- Mount & Theme Detection ---
  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme !== "light");
  }, []);

  // --- Apply Dark Mode ---
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
      {/* ✅ Navbar */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Section */}
      <motion.div
        id="work"
        className="w-full px-[12%] py-24 scroll-mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <motion.h2
          className="text-center text-5xl font-Ovo mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Work
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          A showcase of my professional and academic projects, demonstrating my skills in development, design, AI, and automation.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {workData.map((work, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-48 rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedWork(work)}
            >
              <Image src={work.bgImage} alt={work.title} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white py-2 px-3 text-sm font-semibold">
                {work.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                className="relative w-[95%] md:w-[70%] lg:w-[60%] bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg my-12"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedWork.preview && (
                  <Image
                    src={selectedWork.preview}
                    alt={selectedWork.title}
                    width={1000}
                    height={700}
                    className="w-full h-auto rounded-lg object-contain mb-6"
                  />
                )}
                <h2 className="text-2xl font-bold mb-2">{selectedWork.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{selectedWork.fullDescription}</p>

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {selectedWork.live && (
                    <a
                      href={selectedWork.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedWork.github && (
                    <a
                      href={selectedWork.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>

                {/* Close Button */}
                <div
                  className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 text-2xl cursor-pointer"
                  onClick={() => setSelectedWork(null)}
                >
                  ✕
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            ⬅ Back to Home
          </button>
        </motion.div>
      </motion.div>

      {/* ✅ Footer */}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default WorkPage;
