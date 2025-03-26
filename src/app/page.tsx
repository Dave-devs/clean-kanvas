
import React from 'react'
import Hero from '../components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';

const Home = () => {
  return (
    <main id='/#' className='flex-grow'>
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default Home