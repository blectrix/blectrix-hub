'use client'

import { Buttons } from '@/components/Buttons'
import React from 'react'
import starsBg from '@/assets/stars.png'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Hero = () => {

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])
  
  return (
    <motion.section 
      className='h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,background_10%,background_90%,transparent)]' 
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className='absolute inset-0 dark:bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_5%,rgb(14,0,36,.5)_78%,transparent)]'></div>
      {/* Start Planet */}
      <div className='absolute h-64 w-64 md:h-96 md:w-96 bg-primary rounded-full border-foreground/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(23,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]'></div>
      {/* End Planet */}
      {/* Start Ring 1 */}
      <motion.div 
      style={{
        translateY: "-50%",
        translateX: "-50%",
      }} 
      animate={{
        rotate: "1turn",
      }} 
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      }}
      className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-foreground opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute h-2 w-2 left-0 bg-foreground rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute h-2 w-2 left-1/2 bg-foreground rounded-full top-0 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute h-5 w-5 left-full border border-foreground rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
          <div className='h-2 w-2 bg-foreground rounded-full'></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}
      {/* Start Ring 2 */}
      <motion.div 
      style={{
        translateY: "-50%",
        translateX: "-50%",
      }}
      animate={{
        rotate: "-1turn",
      }}
      transition={{
        repeat: Infinity,
        duration: 60,
        ease: "linear",
      }} 
      className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-foreground/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'></motion.div>
      {/* End Ring 2 */}
      {/* Start Ring 3 */}
      <motion.div 
      style={{
        translateY: "-50%",
        translateX: "-50%",
      }}
      animate={{
        rotate: "1turn",
      }}
      transition={{
        repeat: Infinity,
        duration: 90,
        ease: "linear",
      }} 
      className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-foreground opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='absolute h-2 w-2 left-0 bg-foreground rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute h-2 w-2 left-full bg-foreground rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2'></div>
      </motion.div>
      {/* End Ring 3 */}
      <div className='container relative mt-16'>
        <h1 className='text-8xl md:text-[168px] md:leading-none text-center font-semibold tracking-tighter bg-foreground bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text'>Blectrix Hub</h1>
        <p className=' mx-auto max-w-xl md:text-xl drop-shadow-[0_0_0.3rem_white] text-foreground/70 mt-5 text-center'>
          Elevate your productivity effortlessly and seamlessly with AI powered by <b className='drop-shadow-[0_0_0.05rem_white]' >BlectrixAI</b>, where technology meets user-friendly production tools.
        </p>
        <div className="flex flex-col items-center justify-between">
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-foreground before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[130px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary before:dark:opacity-10 after:dark:from-secondary after:dark:via-primary after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <div className='flex items-center justify-center mt-5 relative dark:drop-shadow-[0_0_0.3rem_background] light:invert'>
              <Buttons>Get Started</Buttons>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero