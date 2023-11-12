/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AddJob = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // send jobs data to server
    const handleAddJob = e => {
        e.preventDefault();

        const form = e.target;
        const employerEmail = form.employerEmail.value;
        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;

    const newJob = { employerEmail, jobTitle, category, description, deadline, minimumPrice, maximumPrice }
    // console.log(newJob);

     // send jobs to the server
      axios.post('https://jobearth-server.vercel.app/jobs', newJob)
      .then(res => {
          console.log(res.data);
          Swal.fire({
            title: 'Congratulations!',
            text: 'Job Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      
          navigate('/user/my-posted-jobs');
        })
      }

  return (
    <div>
       <Helmet>
        <title>JobEarth | Add Job</title>
       </Helmet>
       <div className="py-20">
        <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
           <h2 className="text-2xl font-semibold text-center mb-3">
           Add Job Opportunity
            </h2>
            <p className='font-normal text-sm text-zinc-500 mb-8 text-center'>Post your job listing here and reach potential candidates quickly.</p>
            <form onSubmit={handleAddJob}>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Employer Email</span>
                </label>
                <input
                type="email"
                name="employerEmail"
                placeholder="Employer email"
                className="input input-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                readOnly
                defaultValue={user?.email} 
                />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Job Title</span>
                </label>
                <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                className="input input-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Category</span>
                </label>
                <select 
                name="category"
                className="select select-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                >
                  <option value="Select category" disabled selected>Select category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Graphics Design">Graphics Design</option>
                </select>
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Deadline</span>
                </label>
                <input
                type="date"
                name="deadline"
                placeholder="Deadline"
                className="input input-bordered rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                style={{ outline: 'none' }}
                />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Minimum Price</span>
                </label>
                <input
                type="text"
                name="minimumPrice"
                placeholder="Minimum price"
                className="input input-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Maximum Price</span>
                </label>
                <input
                type="text"
                name="maximumPrice"
                placeholder="Maximum price"
                className="input input-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Description</span>
                </label>
                <textarea
                type="text"
                rows={3}
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered resize-none focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                />
            </div>
            <div className="form-control my-8">
               <button type='submit' className="bg-cyan-600 p-3 w-full rounded-md text-white font-medium text-base">
                ADD JOB
                </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddJob
