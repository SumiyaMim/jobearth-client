/* eslint-disable no-unused-vars */
import React from 'react'
import web from '../assets/web.jpg'
import smart from '../assets/smart.jpg'
import apptension from '../assets/apptension.png'
import codesign from '../assets/codesign.jpg'

const Companies = () => {
  return (
    <div className='px-8 lg:px-14 pt-10 pb-20'>
      <h1 className='font-semibold text-2xl text-center mb-2'>Top Companies</h1>
      <p className='text-center font-normal text-zinc-500 leading-6 text-xs md:text-sm md:w-4/5 lg:w-1/2 mx-auto mb-4'>Explore industry leaders in web development, digital marketing, and graphics design on JobEarth. Discover top companies, their latest job openings, and join the digital pioneers.</p>
      <hr className='border-[1.5px] border-cyan-600 w-40 mx-auto mb-16'/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-8 border border-cyan-600 rounded-lg text-center'>
            <img src={web} alt="" className='w-28 h-20 mb-4 mx-auto'/>
            <h3 className='font-semibold text-base'>Web Technology BD</h3>
            <p className='font-medium text-zinc-500 text-sm mb-3'>Satkhira, Bangladesh</p>
            <button className='bg-cyan-600 px-4 py-1.5 rounded-md text-sm text-white font-medium'>25 Open Position</button>
        </div>
        <div className='p-8 border border-cyan-600 rounded-lg text-center'>
            <img src={apptension} alt="" className='w-20 h-20 mb-4 mx-auto'/>
            <h3 className='font-semibold text-base'>Apptension</h3>
            <p className='font-medium text-zinc-500 text-sm mb-3'>Poznan, Poland</p>
            <button className='bg-cyan-600 px-4 py-1.5 rounded-md text-sm text-white font-medium'>40 Open Position</button>
        </div>
        <div className='p-8 border border-cyan-600 rounded-lg text-center'>
            <img src={codesign} alt="" className='w-20 h-20 mb-4 mx-auto'/>
            <h3 className='font-semibold text-base'>COdesign</h3>
            <p className='font-medium text-zinc-500 text-sm mb-3'>Dhaka, Bangladesh</p>
            <button className='bg-cyan-600 px-4 py-1.5 rounded-md text-sm text-white font-medium'>30 Open Position</button>
        </div>
        <div className='p-8 border border-cyan-600 rounded-lg text-center'>
            <img src={smart} alt="" className='w-20 h-20 mb-4 mx-auto'/>
            <h3 className='font-semibold text-base'>SmartSites</h3>
            <p className='font-medium text-zinc-500 text-sm mb-3'>Paramus, NJ</p>
            <button className='bg-cyan-600 px-4 py-1.5 rounded-md text-sm text-white font-medium'>18 Open Position</button>
        </div>
      </div>
    </div>
  )
}

export default Companies
