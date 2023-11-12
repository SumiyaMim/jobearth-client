/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bidJobs, setBidJobs] = useState([]);
  const [filteredBidJobs, setFilteredBidJobs] = useState([]);

  // get bid jobs from the server
  useEffect(() => {
    axios.get(`https://jobearth-server.vercel.app/bids?email=${user.email}&sortField=status&sortOrder=1`, { withCredentials: true })    
    .then((res) => {
      setBidJobs(res.data);
    });
  }, []);

  useEffect(() => {
    const filteredBidJob = bidJobs.filter((bid) => bid.customerEmail === user.email);
    setFilteredBidJobs(filteredBidJob);
  }, [bidJobs, user.email]);

  const handleComplete = id => {
    axios.patch(`https://jobearth-server.vercel.app/bids/${id}`, { status: 'completed' })
      .then((res) => {
        console.log(res.data);
        const modifiedCount = res.data.modifiedCount;
        if (modifiedCount > 0) {
          // update state
          const remaining = filteredBidJobs.filter(bid => bid._id !== id);
          const updated = filteredBidJobs.find(bid => bid._id === id);
          updated.status = 'completed'
          const newBids = [updated, ...remaining];
          setFilteredBidJobs(newBids);
        }
      });
  }

  return (
    <div className='px-8 lg:px-14 py-20'>
      <Helmet>
        <title>JobEarth | My Bids</title>
      </Helmet>
      <h1 className='font-semibold text-2xl text-center mb-2'>My Bids</h1>
      <hr className="border-[1.5px] border-cyan-600 w-16 mx-auto mb-16" />
      <div>
        {filteredBidJobs?.length === 0 ? (
          <p className='py-10 font-medium text-center text-lg'>No bid jobs found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">No.</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Job Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Email</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Deadline</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBidJobs?.map((bid, index) => (
                  <tr key={bid._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{index + 1}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{bid.job_title}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{bid.employerEmail}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{bid.bid_deadline}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">
                      <div className='flex items-center gap-4'>
                        {bid.status === 'rejected' ? 'Rejected' : bid.status === 'in progress' ? 'In Progress' : bid.status === 'completed' ? 'Complete' : "Pending"}
                        {bid.status !== 'completed' && bid.status !== 'rejected' && (
                          <button
                            onClick={() => handleComplete(bid._id)}
                            className={`px-3 py-1 text-xs font-medium rounded-md ${
                              bid.status !== 'in progress' ? 'bg-gray-300 text-white' : 'bg-cyan-600 text-white'
                            }`}
                            disabled={bid.status !== 'in progress'}
                          >
                            Complete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBids;
