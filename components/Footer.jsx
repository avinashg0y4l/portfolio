import { assets } from '@/lib/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 avinashg0y4l. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/avinashg0y4l/">GitHub</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/avinash-goyal-g0y4l/">LinkedIn</a></li>
          <li><a target='_blank' href="#">Twitter</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
