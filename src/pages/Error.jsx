/* eslint-disable no-unused-vars */
import React from 'react'
import error from '../assets/error.json'
import Lottie from "lottie-react"
import { TbArrowBackUp } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[300px] md:w-[400px] lg:w-[500px] mx-auto my-10 md:my-0'>
            <Lottie animationData={error} loop={true} />
        </div>
        <div className='mb-5'>
            <Link to='/'>
                <button className='flex items-center gap-2 bg-cyan-600 px-4 py-2 rounded-lg text-white'>
                    <i><TbArrowBackUp className='text-2xl'></TbArrowBackUp></i>
                    <p className='text-base font-medium'>Back to home</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Error
