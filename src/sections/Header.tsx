'use client'

import React from 'react'
import { ThemeColorToggle } from "@/components/theme-color-toogle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import Image from "next/image";
import { MenuIcon } from 'lucide-react';
import { Buttons } from '@/components/Buttons';

export const Header = () => {
  return (
    <header className="py-4 border-b border-foreground/15 md:border-none sticky top-0 z-10">
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border border-foreground/15 md:p-2.5 rounded-xl max-w-screen mx-auto">
        <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
          <div>
            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-foreground before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[130px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-secondary after:dark:via-primary after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[130px]">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_white] dark:invert"
                src="/blectrix.svg"
                alt="Blectrix Logo"
                width={120}
                height={37}
                priority
              />
            </div>
          </div>
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href='#' className='text-foreground/60 hover:text-foreground transition-colors'>
                Products
              </a>
              <a href='#' className='text-foreground/60 hover:text-foreground transition-colors'>
                Services
              </a>
              <a href='#' className='text-foreground/60 hover:text-foreground transition-colors'>
                Pricing
              </a>
              <a href='#' className='text-foreground/60 hover:text-foreground transition-colors'>
                Company
              </a>
            </nav>
          </div>
          <div className='flex items-center gap-4 '>
            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-foreground before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[130px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-secondary after:dark:via-primary after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[130px]">
              <Buttons>Get Started</Buttons>
            </div>
            <div className="flex items-center gap-2">
              <ThemeColorToggle />
              <ThemeModeToggle />
            </div>
            <MenuIcon className='md:hidden' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header