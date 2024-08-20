import React from 'react';
import { FiDownload } from "react-icons/fi"

import Photo from '../components/photo';
import Social from "../components/social"

function Home() {
  return( 
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left'>
            <span className='text-xl'>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br/> <span className='text-accent'>Bryce Graham</span>
            </h1>
            <p className='max-w-[500px] mb-9'>I excel at crafting web app experience and I am proficient in multiple programming Languages and technologies</p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              {/* need to add button styling */}
              <button id='csvBtn'>
                <span>Download CV</span>
                <FiDownload/> 
              </button>
              <div className='mb-8 xl:mb-0'>
                <Social 
                  containerStyles='flex gap-6' 
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
              </div>
            </div>
          </div>
          <div><Photo/></div>
        </div>
      </div>
    </section>
  )
}

export default Home;