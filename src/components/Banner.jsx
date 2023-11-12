/* eslint-disable no-unused-vars */
import React from 'react';
import job from '../assets/job.png'
import { FaArrowRightLong } from 'react-icons/fa6';


const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-9 lg:px-14 py-10 items-center gap-6">
            <div className='flex-1'>
                <h1 className='font-semibold text-2xl lg:text-3xl mb-5'>Discover Your <br /><span className='font-semibold text-5xl lg:text-7xl text-cyan-700'>Dream Job</span></h1>
                <p className='text-sm mb-10 lg:text-base text-zinc-500 w-full leading-6 lg:w-4/5'>JobEarth is your ultimate destination for finding the perfect job opportunities. Explore a world of career possibilities and land your dream job with ease.</p>
                <button className='flex items-center gap-2 px-5 py-1.5 border-2 rounded-lg border-cyan-700 text-base font-medium text-cyan-700 hover:border-white hover:bg-white'>
                    Learn More
                    <i className='text-sm'><FaArrowRightLong></FaArrowRightLong></i>
                    </button>
            </div>
            <div className='flex-1 lg:flex-none'>
                <img src={job} alt="" className='w-[380px] lg:w-[500px]'/>
            </div>
    </div>
  );
};

export default Banner;
