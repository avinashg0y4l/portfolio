"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { workData } from "@/lib/workData";
import Footer from "@/components/Footer";
import SubNavbar from "@/components/SubNavbar";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  // --- Mount Detection ---
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Navbar */}
      <SubNavbar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full px-[8%] py-28 pt-[160px] transition-colors duration-500 min-h-screen"
      >
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-Ovo text-center mb-14 text-gray-900 dark:text-white">
          My Work
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {workData.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
                         rounded-2xl shadow-md hover:shadow-xl dark:hover:shadow-gray-700/50 
                         overflow-hidden flex flex-col transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-56">
                <Image
                  src={project.bgImage.replace("./", "/assets/")}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                                flex items-center justify-center gap-3 transition-opacity duration-500">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm shadow 
                                 hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm shadow 
                                 hover:bg-blue-500 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm shadow 
                               hover:bg-green-500 transition"
                  >
                    View More
                  </button>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 overflow-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 
                            rounded-2xl shadow-xl w-full max-w-3xl p-6 relative my-12"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-xl font-bold text-gray-800 dark:text-gray-200"
                >
                  ✖
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>

                {/* Image */}
                {selectedProject.preview && (
                  <Image
                    src={selectedProject.preview.replace("./", "/assets/")}
                    alt={selectedProject.title}
                    width={800}
                    height={450}
                    className="rounded-xl mb-4 object-cover shadow"
                  />
                )}

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Links */}
                <div className="flex gap-3 mb-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Customer Review */}
                {selectedProject.review && (
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Customer Review
                    </h3>
                    <p className="text-sm italic text-gray-700 dark:text-gray-400">
                      “{selectedProject.review}”
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>

      {/* Footer */}
      <Footer />
    </>
  );
}
