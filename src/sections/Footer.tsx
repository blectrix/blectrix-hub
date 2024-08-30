'use client'

import React from 'react'
import XSocial from '@/assets/social-x.svg'
import InstaSocial from '@/assets/social-instagram.svg'
import YTSocial from '@/assets/social-youtube.svg'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='py-5 border-t border-foreground/15'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <div className='flex gap-2 items-center lg:flex-1'>
          <Image
                className="relative dark:drop-shadow-[0_0_0.1rem_white] dark:invert"
                src="/logo.svg"
                alt="Blectrix Logo"
                width={20}
                height={20}
                priority
              />
            <div className='font-light text-sm'>© Blectrix 2024</div>    
          </div>
            <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
              <a href='#' className='text-foreground/70 hover:text-foreground text-xs md:text-sm transition'>Products</a>
              <a href='#' className='text-foreground/70 hover:text-foreground text-xs md:text-sm transition'>Services</a>
              <a href='#' className='text-foreground/70 hover:text-foreground text-xs md:text-sm transition'>Blog</a>
              <a href='#' className='text-foreground/70 hover:text-foreground text-xs md:text-sm transition'>Company</a>
              <a href='#' className='text-foreground/70 hover:text-foreground text-xs md:text-sm transition'>Developers</a>
              <a href='#' className='text-foreground/70 hover:text-foreground text-xs md:text-sm transition'>Pricing</a>
            </nav>
          <div className='flex gap-5 lg:flex-1 lg:justify-end'>
            <XSocial className="text-foreground/40 hover:text-foreground transition"/>
            <InstaSocial className="text-foreground/40 hover:text-foreground transition"/>
            <YTSocial className="text-foreground/40 hover:text-foreground transition"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer