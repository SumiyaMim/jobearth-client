/* eslint-disable no-unused-vars */
import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='py-10'>
     <div className='bg-zinc-800 flex flex-col lg:flex-row justify-between'>
        <div>
            <img src={about} alt="" className='w-full h-[400px] lg:h-full lg:w-[1000px]'/>
        </div>
        <div className='px-8 lg:px-14 py-10 text-white'>
            <h2 className='font-normal text-5xl mb-6 text-cyan-500'>Connecting Talent <br /> <span className='text-3xl text-zinc-50'>with Digital Excellence</span></h2>
            <p className='text-justify text-sm leading-6 font-normal text-zinc-300'>JobEarth opens doors to careers in web development, digital marketing, and graphics design. We connect talent to pioneering digital companies, fostering career growth. Explore your future with us.</p>
            <hr className='my-10'/>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mb-12'>
                <div>
                    <div className='flex gap-1 items-center mb-1'>
                        <h3 className='text-4xl font-medium mt-1'>80</h3>
                        <h3 className='text-4xl font-medium'>+</h3>
                    </div>
                    <p className='text-zinc-200'>Companies</p>
                </div>
                <div>
                    <div className='flex gap-1 items-center mb-1'>
                        <h3 className='text-4xl font-medium mt-1'>3</h3>
                        <h3 className='text-4xl font-medium'>+</h3>
                    </div>                    
                    <p className='text-zinc-200'>Categories</p>
                </div>
                <div>
                    <div className='flex gap-1 items-center mb-1'>
                        <h3 className='text-4xl font-medium mt-1'>300</h3>
                        <h3 className='text-4xl font-medium'>+</h3>
                    </div>
                    <p className='text-zinc-200'>Job Posts</p>
                </div>
                <div>
                    <div className='flex gap-1 items-center mb-1'>
                        <h3 className='text-4xl font-medium mt-1'>400</h3>
                        <h3 className='text-4xl font-medium'>+</h3>
                    </div>
                    <p className='text-zinc-200'>World Wide Client</p>
                </div>
            </div>
            <div className='flex justify-end items-end'>
                <button className='px-5 py-1.5 rounded-lg bg-cyan-600 text-base font-medium text-white hover:text-cyan-600 hover:bg-white'>
                Explore More</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About
