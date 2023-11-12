/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png';
import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className='bg-zinc-100'>
      <div className='max-w-7xl mx-auto py-16 px-8 lg:px-12 flex flex-col md:flex-row gap-6 md:gap-4 justify-between'>
        <div className='md:w-72 lg:w-96'>
            <div className='flex items-center text-white gap-2 mb-2'>
                <img src={logo} className='w-7'/>
                <a className="normal-case text-cyan-700 text-2xl font-semibold">
                    JobEarth
                </a>
            </div>
            <p className='text-sm text-zinc-500 font-medium mb-5'>Your gateway to dream jobs. Connect with top companies and launch your career today!</p>
            <div className='text-cyan-700 text-2xl flex items-center gap-4'>
                <i><BsFacebook></BsFacebook></i>
                <i><BsPinterest></BsPinterest></i>
                <i className='text-[28px]'><AiFillTwitterCircle></AiFillTwitterCircle></i>
            </div>
        </div>
        <div>
            <h2 className='text-base font-semibold text-zinc-600 mb-4'>Our Company</h2>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>About Us</p>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>Contact Us</p>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>Terms & Conditions</p>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>Privacy Policy</p>
        </div>
        <div>
            <h2 className='text-base font-semibold text-zinc-600 mb-4'>Useful Links</h2>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>Browse Jobs</p>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>Leaderboard</p>
            <p className='text-sm text-zinc-500 mb-2 font-medium hover:text-cyan-700'>Employability Test</p>
        </div>
        <div>
            <h2 className='text-base font-semibold text-zinc-600 mb-4'>Contact</h2>
            <div className='flex items-center gap-2 text-sm mb-2 font-medium'>
                <i><FaLocationDot  className='text-cyan-700'></FaLocationDot></i>
                <p className='text-zinc-500'>Dhaka, Bangladesh</p>
            </div>
            <div className='flex items-center gap-2 text-sm mb-2 font-medium'>
                <i><FaPhoneVolume  className='text-cyan-700'></FaPhoneVolume></i>
                <p className='text-zinc-500'>010 7478 2069</p>
            </div>
            <div className='flex items-center gap-2 text-sm mb-2 font-medium'>
                <i><GrMail  className='text-cyan-700'></GrMail></i>
                <p className='text-zinc-500'>info@jobearth.com.bd</p>
            </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-10'>
        <hr className='border-[1px] border-zinc-300'/>
        <p className='text-sm text-zinc-500 font-semibold pt-8 pb-10 text-center'>Copyright © {new Date().getFullYear()} JobEarth. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
