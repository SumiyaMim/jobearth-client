/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const [bidRequests, setBidRequests] = useState([]);
  const [filteredBidRequests, setFilteredBidRequests] = useState([]);

  // get bid jobs from the server
  useEffect(() => {
    axios.get(`https://jobearth-server.vercel.app/bids?email=${user.email}`, { withCredentials: true }).then((res) => {
      setBidRequests(res.data);
    });
  }, []);

  useEffect(() => {
    const filteredBidRequest = bidRequests.filter((bidRequest) => bidRequest.employerEmail === user.email);
    setFilteredBidRequests(filteredBidRequest);
  }, [bidRequests, user.email]);

  // handle accept requests
  const handleAcceptRequest = id => {
    axios.patch(`https://jobearth-server.vercel.app/bids/${id}`, { status: 'in progress' })
      .then((res) => {
        console.log(res.data);
        const modifiedCount = res.data.modifiedCount;
        if (modifiedCount > 0) {
          // update state
          const remaining = filteredBidRequests.filter(bidRequest => bidRequest._id !== id);
          const updated = filteredBidRequests.find(bidRequest => bidRequest._id === id);
          updated.status = 'in progress';
          const newBidRequests = [updated, ...remaining];
          setFilteredBidRequests(newBidRequests);
        }
      });
  };

  // handle reject requests
  const handleRejectRequest = id => {
    axios.patch(`https://jobearth-server.vercel.app/bids/${id}`, { status: 'rejected' })
      .then((res) => {
        console.log(res.data);
        const modifiedCount = res.data.modifiedCount;
        if (modifiedCount > 0) {
          // update state
          const remaining = filteredBidRequests.filter(bidRequest => bidRequest._id !== id);
          const updated = filteredBidRequests.find(bidRequest => bidRequest._id === id);
          updated.status = 'rejected';
          const newBidRequests = [updated, ...remaining];
          setFilteredBidRequests(newBidRequests);
        }
      });
  };

  return (
    <div className='px-8 lg:px-14 py-20'>
      <Helmet>
        <title>JobEarth | Bid Requests</title>
      </Helmet>
      <h1 className='font-semibold text-2xl text-center mb-2'>Bid Requests</h1>
      <hr className="border-[1.5px] border-cyan-600 w-16 mx-auto mb-16" />
      <div>
        {filteredBidRequests?.length === 0 ? (
          <p className='py-10 font-medium text-center text-lg'>No bid requests found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">No.</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Job Title</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Email</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-600">Deadline</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-800">Price</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-zinc-800">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBidRequests?.map((bidRequest, index) => (
                  <tr key={bidRequest._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{index + 1}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{bidRequest.job_title}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{bidRequest.customerEmail}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">{bidRequest.bid_deadline}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">${bidRequest.bid_price}</td>
                    <td className="px-4 py-2 text-xs md:text-sm font-normal text-zinc-700">
                      <div>
                        <div className='flex items-center gap-4 mb-1'>
                          {bidRequest.status === 'rejected' ? 'Rejected' : bidRequest.status === 'in progress' ? 'In Progress' : bidRequest.status === 'completed' ? 'Complete' : "Pending"}

                          {bidRequest.status !== 'in progress' && bidRequest.status !== 'completed' && bidRequest.status !== 'rejected' && (
                            <div className='flex items-center gap-2'>
                              <button onClick={() => handleAcceptRequest(bidRequest._id)} className='bg-cyan-600 text-white px-3 py-1 text-xs font-medium rounded-md'>Accept</button>
                              <button onClick={() => handleRejectRequest(bidRequest._id)} className='bg-cyan-600 text-white px-3 py-1 text-xs font-medium rounded-md'>Reject</button>
                            </div>
                          )}
                        </div>
                        <div>
                          {["in progress", "completed"].includes(bidRequest.status) && (
                            <div>
                              <ProgressBar
                                filledBackground="linear-gradient(to right, #0891B2, #0891B2)"
                                percent={bidRequest.status === "in progress" ? 50 : 100}>
                                <Step>
                                  {({ accomplished }) => (
                                    <div
                                      style={{
                                        width: "100%",
                                        height: "2px",
                                        transform: `scaleX(${accomplished})`,
                                      }}
                                    ></div>
                                  )}
                                </Step>
                              </ProgressBar>
                            </div>
                          )}
                        </div>
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
  )
}

export default BidRequests;
