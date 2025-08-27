import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import cert1 from "../assets/certificates/SAP_Certificate.png";
import cert2 from "../assets/certificates/salesforce.png";
import cert3 from "../assets/certificates/Github.png";
import cert4 from "../assets/certificates/IT_essential.png";
import cert5 from "../assets/certificates/Kodacy.png";
import cert6 from "../assets/certificates/tcs_codevita.png";



const certificates = [
  { id: 1, src: cert1, title: "Certificate 1" },
  { id: 2, src: cert2, title: "Certificate 2" },
  { id: 3, src: cert3, title: "Certificate 3" },
  { id: 4, src: cert4, title: "Certificate 4" },
  { id: 5, src: cert5, title: "Certificate 5" },
  { id: 6, src: cert6, title: "Certificate 6" },
  // ... more certificates
];

const Certificates = ({ isDarkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [displayCerts, setDisplayCerts] = useState(certificates.slice(0, 6));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Mobile: show only 3
        setDisplayCerts(certificates.slice(0, 3));
      } else {
        setDisplayCerts(certificates.slice(0, 6));
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      id="certificates"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading & Description */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Achievements
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Certificates
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Here are some of the certifications I've earned demonstrating my skills and expertise.
      </motion.p>

      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        {displayCerts.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-48 rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <Image src={cert.src} alt={cert.title} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white py-2 px-3 text-sm font-semibold">
              {cert.title}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-[90%] md:w-[70%] lg:w-[50%] h-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCert.src}
                alt={selectedCert.title}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-lg object-contain"
              />
              <div
                className="absolute top-2 right-2 text-white text-xl cursor-pointer"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certificates;
