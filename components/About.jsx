"use client";

import { assets, infoList, toolsData } from "@/lib/assets";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const About = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = isMounted && resolvedTheme === "dark";

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[8%] md:px-[12%] py-10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          Introduction
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          About me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14 my-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-72 lg:w-80 shrink-0 rounded-xl border border-gray-400 dark:border-white/30 p-2 bg-white/50 dark:bg-transparent"
          >
            <img
              src={assets.photoavin}
              alt="user"
              className="w-full rounded-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1 w-full"
          >
            <p className="mb-8 max-w-2xl font-Ovo text-gray-600 dark:text-white/80 leading-6">
              Aspiring Software Developer and ATL Instructor with hands-on
              experience in robotics, embedded systems, and automation. Worked on
              real-time projects in drone mission planning, computer vision, and
              intelligent transportation systems, including research experience at
              IIT Jodhpur.
            </p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  whileHover={{ scale: 1.03 }}
                  key={index}
                  className="border border-gray-400 dark:border-white/30 rounded-lg p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
                >
                  <img
                    src={isDark ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-1"
                  />
                  <h3 className="my-3 text-lg font-Ovo text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mt-8 mb-4 text-lg font-Ovo text-gray-700 dark:text-white"
            >
              Tools I use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.08 }}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-13 aspect-square border border-gray-400 dark:border-white/30 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
                >
                  <img
                    src={tool}
                    alt="Tool"
                    className="w-5 sm:w-6 object-contain"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;