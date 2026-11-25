"use client";

import { assets } from '@/lib/assets'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { FaEye } from "react-icons/fa";

let isRequestSent = false;
const INITIAL_OFFSET = 207;

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [views, setViews] = useState(null);

  useEffect(() => {
    setIsMounted(true);

    if (isRequestSent) return;
    isRequestSent = true;

    const fetchViews = async () => {
      const baseUrl = "https://api.counterapi.dev/v2/avinashg0y4l-port-2026/visits";
      const hasVisited = sessionStorage.getItem("portfolio_visited");

      if (!hasVisited) {
        sessionStorage.setItem("portfolio_visited", "true");
      }

      const saved = Number(localStorage.getItem("last_known_views") || INITIAL_OFFSET);

      try {
        const url = hasVisited ? baseUrl : `${baseUrl}/up`;
        const res = await fetch(url, { cache: "no-store" });

        if (res.ok) {
          const json = await res.json();
          const rawCount = json?.data?.up_count ?? json?.up_count ?? json?.count;

          if (typeof rawCount === "number") {
            const totalViews = Math.max(rawCount + INITIAL_OFFSET, saved);
            localStorage.setItem("last_known_views", String(totalViews));
            setViews(totalViews);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch views:", error);
      }

      // Fallback agar offline ho
      const nextCount = hasVisited ? saved : saved + 1;
      localStorage.setItem("last_known_views", String(nextCount));
      setViews(nextCount);
    };

    fetchViews();
  }, []);

  const isDark = isMounted && resolvedTheme === 'dark';

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <img src={isDark ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <img src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          avinashg0y4l@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 gap-4'>
        <p>© 2026 avinashg0y4l. All rights reserved.</p>

        {/* Live Visitor Counter Pill */}
        <div className='w-max mx-auto sm:mx-0 my-3 sm:my-0 flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-400 dark:border-white/30 text-sm font-Ovo text-gray-700 dark:text-white/85'>
          <FaEye className='w-3.5 h-3.5' />
          <span>{views !== null ? `${views.toLocaleString()} Views` : "... Views"}</span>
        </div>

        <ul className='flex items-center gap-10 justify-center'>
          <li><a target='_blank' href="https://github.com/avinashg0y4l/">GitHub</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/avinash-goyal-g0y4l/">LinkedIn</a></li>
          <li><a target='_blank' href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer