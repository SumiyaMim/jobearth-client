/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import spinner from '../assets/spinner.json'

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center py-28'>
                <div className=' w-[100px] mx-auto'>
                    <Lottie animationData={spinner} loop={true} />
                </div>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signin" state={location.pathname}></Navigate>;

}

export default PrivateRoute
