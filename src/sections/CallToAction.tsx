'use client'

import React, { RefObject, useEffect } from 'react'
import starsBg from '@/assets/stars.png'
import gridLines from '@/assets/grid-lines.png'
import Buttons from '@/components/Buttons'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return
    const { top, left } = to.current?.getBoundingClientRect()
    mouseX.set(event.x - left)
    mouseY.set(event.y - top)
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, []);

  return [mouseX, mouseY]
}

export const CallToAction = () => {

  const sectionRef = useRef<HTMLElement>(null)
  const borderedDivRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef)

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, background, transparent)`

  return (
    <section className='py-20 md:py-24' ref={sectionRef}>
      <div className='container'>
        <motion.div 
        ref={borderedDivRef}
          animate={{
              backgroundPositionX: starsBg.width,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 60,
            }}
            className='border border-foreground/15 py-24 rounded-xl overflow-hidden relative group' 
            style={{
              backgroundPositionY, 
              backgroundImage: `url(${starsBg.src})`,
            }}
          >
          <div className='absolute inset-0 bg-primary/70 bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,background,transparent)] group-hover:opacity-0 transition duration-700' style={{backgroundImage: `url(${gridLines.src})`,}}></div>
          <motion.div className='absolute inset-0 bg-primary/70 bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700' style={{maskImage, backgroundImage: `url(${gridLines.src})`,}}></motion.div>
          <div className='relative'>
            <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>
              AI-Driven Solutions For Everyone
            </h2>
            <p className='text-center text-lg md:text-xl max-w-xl mx-auto text-foreground/70 px-4 mt-5 tracking-tight'>
              Achieve clear, impactful results without the complexity with our powerful AI-powered platforms that helps you to automate your daily tasks and workflows, saving you time and effort.
            </p>
            <div className='flex justify-center mt-8'>
              <Buttons>Get Started</Buttons>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction