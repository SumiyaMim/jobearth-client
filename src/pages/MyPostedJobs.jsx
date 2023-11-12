/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);
    const [postedJobs, setPostedJobs] = useState([]);
    const [filteredPostedJobs, setFilteredPostedJobs] = useState([]);

    // get posted jobs from the server
    useEffect(() => {
        axios.get(`https://jobearth-server.vercel.app/jobs/my-posted-jobs?email=${user.email}`, { withCredentials: true }).then((res) => {
        setPostedJobs(res.data);
        });
    }, []);

    const handleDeleteJob = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Are you sure that you want to delete it?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://jobearth-server.vercel.app/jobs/${id}`)
            .then((res) => {
              const deletedCount = res.data.deletedCount;
              if (deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your posted job has been deleted.',
                  'success'
                );
                const remainingJobs = postedJobs.filter(job => job._id !== id);
                setPostedJobs(remainingJobs);
              } 
            })
        }
      });
    };    
  
    useEffect(() => {
        const filteredPostedJob = postedJobs.filter((job) => job.employerEmail === user.email);
        setFilteredPostedJobs(filteredPostedJob);
      }, [postedJobs, user.email]);      
    

  return (
    <div className='px-8 lg:px-14 py-20'>
      <Helmet>
           <title>JobEarth | My Posted Jobs</title>
      </Helmet>   
      <h1 className='font-semibold text-2xl text-center mb-2'>My Posted Jobs</h1>
      <hr className="border-[1.5px] border-cyan-600 w-16 mx-auto mb-16" />
       {filteredPostedJobs.length > 0 ? (
            filteredPostedJobs.map((postedJob) => (
            <div key={postedJob._id}>
              <div className="shadow border rounded-lg flex flex-col md:flex-row gap-7 md:gap-0 justify-between items-end lg:w-3/5 mx-auto mb-5 p-10">
                <div>
                    <h2 className="font-semibold text-xl md:text-2xl mb-0.5">{postedJob.jobTitle}</h2>
                    <p className='text-xs md:text-sm font-semibold text-cyan-700 uppercase mb-3'>{postedJob.category}</p>
                    <p className="text-zinc-500 font-normal text-justify mb-3">{postedJob.description}</p>
                    <p className="text-zinc-800 font-medium">
                    Deadline:{' '} &nbsp;
                    {new Date(postedJob.deadline)
                        .toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        })
                        .replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3')}
                    </p>
                    <p className="text-zinc-800 font-medium">Price Range: &nbsp;${postedJob.minimumPrice} - ${postedJob.maximumPrice}</p>
                </div>
                <div className='flex items-center gap-4'>
                <Link to={`/user/update-job/${postedJob._id}`}>
                    <button className="px-5 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md text-sm">UPDATE</button>
                </Link>
                    <button onClick={() => handleDeleteJob(postedJob._id)}  className="px-5 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md text-sm">DELETE</button>
                </div>
              </div>
                </div>
            ))
            ) : (
                <p className='py-10 font-medium text-center text-lg'>No posted jobs found</p>
          )}
    </div>
  )
}

export default MyPostedJobs
