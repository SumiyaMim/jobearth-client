/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import BidForm from '../components/BidForm';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {

    const singleJob = useLoaderData();
    const { jobTitle, category, description, deadline, minimumPrice, maximumPrice } = singleJob

  return (
    <div className='py-20 px-8 lg:px-14'>
       <Helmet>
        <title>JobEarth | {jobTitle}</title>
       </Helmet>
        <h1 className='font-semibold text-2xl text-center mb-2'>Job Information</h1>
        <hr className="border-[1.5px] border-cyan-600 w-16 mx-auto mb-16" />
        <div className='md:w-3/4 lg:w-3/5 mx-auto'>
            <h2 className='text-xl font-semibold mb-2'>Job Title: &nbsp;<span className='font-normal text-zinc-500'>{jobTitle}</span></h2>
            <p className='font-semibold mb-1'>Job Description: &nbsp; <span className='font-normal text-zinc-500'>{description}</span></p>
            <p className='font-semibold mb-1'>Category: &nbsp; <span className='font-normal text-zinc-500'>{category}</span></p>
            <p className="font-semibold mb-1">Deadline &nbsp;
                <span className='font-normal text-zinc-500'>
                    {new Date(deadline)
                    .toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    })
                    .replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3')}
                 </span>
            </p>
            <p className="font-semibold">Price Range: &nbsp; <span className='font-normal text-zinc-500'>${minimumPrice} - ${maximumPrice}</span></p>
        </div>
        <BidForm/>
    </div>
  )
}

export default JobDetails
