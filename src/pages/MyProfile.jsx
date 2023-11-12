/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MyProfile = () => {

    const { user } = useContext(AuthContext);

  return (
    <div className='py-20 px-8 lg:px-14'>
        <Helmet>
           <title>JobEarth | My Profile</title>
        </Helmet>       
       <div className='border-2 border-cyan-600 p-20 rounded-xl text-center md:mx-40 lg:mx-96'>
            <div className="w-28 mx-auto">
                    <img src={user.photoURL} alt={user.displayName} className='rounded-full mb-5'/>
            </div>
            <h2 className='font-medium text-base mb-1'>{user.displayName}</h2>
            <p className='font-medium text-base'>{user.email}</p>
        </div>
    </div>
  )
}

export default MyProfile
