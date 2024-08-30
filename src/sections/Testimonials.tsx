'use client'
import React from 'react'

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-3.png";
import avatar6 from "@/assets/avatar-4.png";
import Image from 'next/image';
import { motion } from 'framer-motion'

export const Testimonials = () => {

  const testimonials = [
    {
      text: "“This product has completely transformed how I manage my projects and deadlines”",
      name: "Njabulo Junda",
      title: "Manager | Jundaz Tech Solutions",
      avatarImg: avatar1,
    },
    {
      text: "“These AI tools have completely revolutionized our workflow entire strategy overnight”",
      name: "Carol Nkonyeni",
      title: "Founder | Three Minute Temptations",
      avatarImg: avatar2,
    },
    {
      text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
      name: "Lakhiwe Mdladla",
      title: "CEO | Innovate",
      avatarImg: avatar3,
    },
    {
      text: "“Our team's productivity has increased significantly since we started using this tool”",
      name: "Ken Mahlaba",
      title: "Director | Kensbo Computers",
      avatarImg: avatar4,
    },
    {
      text: "“I highly recommend BlectrixAI to any business looking to leverage AI for competitive advantage.”",
      name: "Sithembile Machi",
      title: "Founder | Her Pots",
      avatarImg: avatar5,
    },
    {
      text: "“Their AI-driven solutions have been invaluable in optimizing our operations.”",
      name: "Naledi Grace",
      title: "CTO | Finance Tech",
      avatarImg: avatar6,
    },
  ];

  return (
    <section className='py-20 md;py-24'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl text-center tracking-tighter font-medium'>Beyond Expectations</h2>
        <p className='text-foreground/70 mx-auto md:text-xl text-lg tracking-tight text-center mt-5 max-w-sm'>
          Our revolutionary AI tools have transformed our clients' strategies.
        </p>
        <div className='flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,background_20%,background,80%,transparent)]'>
          <motion.div 
            initial={{
              translateX: "-50%",
            }} 
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className='flex gap-5 flex-none'
            >
              {[...testimonials, ...testimonials].map((testimonials) => (
                <div className='group rounded-xl border bg-card px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-white dark:border-opacity-5 max-w-md flex-none'>
                  <div key={testimonials.name} className=' border border-foreground/15 p-6 md:p-10 rounded-xl dark:bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-md flex-none'>

                    <div className='text-lg tracking-tight md:text-xl'>{testimonials.text}</div>
                    <div className='flex items-center gap-3 mt-5'>
                      <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-primary/70 after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border border-foreground/30 before:z-10 before:rounded-lg">
                        <Image src={testimonials.avatarImg} alt={`Avatar for ${testimonials.name}`} className='h-11 w-11 rounded-lg grayscale' />
                      </div>
                      <div className=''>
                        <div>{testimonials.name}</div>
                        <div className='text-foreground/50 text-sm'>{testimonials.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials