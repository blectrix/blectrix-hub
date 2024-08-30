import React from 'react'
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero"
import LogoTicker from '@/sections/LogoTicker';
import Products from '@/sections/Products';
import Testimonials from '@/sections/Testimonials';
import CallToAction from '@/sections/CallToAction';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker/>
      <Products/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  );
}
