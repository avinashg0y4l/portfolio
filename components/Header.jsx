import { assets } from '@/lib/assets';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <img src={assets.profile_img} alt="Profile photo" className="rounded-full w-32" />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Avinash Goyal <img src={assets.hand_icon} alt="Waving hand" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        <TypeAnimation
          sequence={['Software Developer', 1500, 'Automation Enthusiast', 1500]}
          speed={50}
          deletionSpeed={40}
          wrapper="span"
          className="font-Ovo"
          repeat={Infinity}
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I’m an <span className="font-semibold">Electronics & Communication Engineering graduate</span> 
        passionate about building <span>intelligent systems</span> at the intersection of 
        <span className="font-semibold"> software</span> and <span className="font-semibold">hardware</span>. 
        My journey spans <span>robotics, embedded systems, and AI-driven automation</span>, where I love turning innovative ideas into real-world solutions.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me <img src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href={assets.resume}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <img src={assets.download_icon} alt="Download icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
