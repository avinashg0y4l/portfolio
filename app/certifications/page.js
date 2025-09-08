"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/assets/certificates/certificatesData";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CertificationPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // --- Mount & Theme Detection ---
  useEffect(() => {
  setIsMounted(true);
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    setIsDarkMode(false);
  } else {
    // Default = dark
    setIsDarkMode(true);
  }
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full px-[12%] py-24"
      >
        {/* Header */}
        <h1 className="text-center text-5xl font-Ovo mb-4">All Certifications</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-600 dark:text-gray-300">
          A complete list of certifications I have earned, showcasing my technical and professional skills.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-48 rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <Image src={cert.src} alt={cert.title} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white py-2 px-3 text-sm font-semibold">
                {cert.title}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
  {selectedCert && (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedCert(null)}
    >
      <motion.div
        className="relative w-[95%] md:w-[70%] lg:w-[60%] bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg my-12"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Image */}
        <Image
          src={selectedCert.src}
          alt={selectedCert.title}
          width={1000}
          height={700}
          className="w-full h-auto rounded-lg object-contain mb-6"
        />

        {/* SEO Text Content */}
        <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          <strong>Issued by:</strong> {selectedCert.issuer}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          <strong>Date:</strong> {selectedCert.date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          <strong>Validation:</strong> {selectedCert.validation}
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-7">
          {selectedCert.description}
        </p>

        {/* Close Button */}
        <div
          className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 text-2xl cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          ✕
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


        {/* ✅ Back Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            ⬅ Back to Home
          </button>
        </div>
      </motion.div>

      {/* ✅ Footer */}
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default CertificationPage;
