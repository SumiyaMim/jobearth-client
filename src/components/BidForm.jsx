/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const BidForm = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const singleJob = useLoaderData();
    const { _id, jobTitle, employerEmail, deadline } = singleJob

    // Check if employerEmail and user.email are the same
    const isSameEmail = employerEmail === user.email;

    // compare date
    const isDeadlinePassed = Date.now() > new Date(deadline);

    const handleBid = event =>{
        event.preventDefault();
  
        const form = event.target;
        const employerEmail = form.employerEmail.value;
        const email = form.email.value;
        const deadline = form.deadline.value;
        const price = form.price.value;

        const bid = {
            customerEmail: email, 
            employerEmail, 
            bid_deadline: deadline, 
            bid_price: price, 
            job_title: jobTitle,
            job_id: _id, 
        }
        // console.log(bid)

        // send bids to the server
        axios.post('https://jobearth-server.vercel.app/bids', bid)
        .then(res => {
            console.log(res.data);
            Swal.fire({
                title: 'Congratulations!',
                text: 'Job Bided Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        
            navigate('/user/my-bids');
            })
    }

  return (
    <div className="border-[1.5px] border-cyan-600 p-8 md:p-12 md:w-3/4 lg:w-3/5 mx-auto rounded-lg mt-10">
        <form onSubmit={handleBid}>    
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
                defaultValue={employerEmail} 
                />
            </div>
            <div className="form-control mb-2">
                <label className="label">
                <span className="label-text font-semibold text-base">Email</span>
                </label>
                <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                readOnly
                defaultValue={user?.email} 
                />
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
                <span className="label-text font-semibold text-base">Price</span>
                </label>
                <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered focus:outline-none rounded placeholder:text-sm placeholder:text-black text-sm"
                required
                />
            </div>
            <div className="form-control mt-8 mb-4">
                <button
                    type="submit"
                    className={`p-3 w-full rounded-md text-white font-medium text-base ${
                    isSameEmail || isDeadlinePassed ? 'bg-gray-300' : 'bg-cyan-600'
                    }`}
                    disabled={isSameEmail || isDeadlinePassed}
                >
                    BID ON THE PROJECT
                </button>
            </div>
        </form>
    </div>
  )
}

export default BidForm
