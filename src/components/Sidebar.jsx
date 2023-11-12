/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';

const Sidebar = () => {
    
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser(); 
        navigate('/signin'); 
    };

  return (
    <div>
      <div className='flex gap-3 flex-col p-6'>
          {user?.email ? (
              <div className='flex flex-col gap-2 mx-auto'>
                 <label tabIndex={0} className="avatar">
                  <div className="w-9 rounded-full mt-1.5 mx-auto">
                      <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <NavLink 
                className='font-medium text-base hover:text-cyan-700 text-center'                
                >
                   {user.displayName}
                </NavLink>
                <NavLink 
                to='/user/my-profile' 
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700 text-center' : 'font-medium text-base text-center'
                }                
                >
                   My Profile
                </NavLink>
                <NavLink 
                to='/user/my-posted-jobs' 
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700 text-center' : 'font-medium text-base text-center'
                }                
                >
                   My Posted Jobs
                </NavLink>
                <NavLink 
                to='/user/my-bids' 
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700 text-center' : 'font-medium text-base text-center'
                }                
                >
                   My Bids
                </NavLink>
                <NavLink 
                to='/user/bid-requests' 
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700 text-center' : 'font-medium text-base text-center'
                }                
                >
                   Bid Requests
                </NavLink>
              </div>
            ) : (
              ""
            )}

            {user?.email ? (
              <div className='flex gap-3 flex-col'>
                <NavLink 
                to='/'
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700 text-center' : 'font-medium text-base text-center'
                }
                >
                    Home
                </NavLink>

                <NavLink 
                to='/add-job'
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700 text-center' : 'font-medium text-base text-center'
                }
                >
                    Add Job
                </NavLink>
                
              </div>
            ) : (
              <div className='flex gap-3 flex-col'>
                <NavLink 
                to='/'
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                }
                >
                    Home
                </NavLink>

                <NavLink 
                to='/add-job'
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                }
                >
                    Add Job
                </NavLink>

              </div>
            )}

            {user?.email ? (
                <button onClick={handleSignOut} className='font-medium text-base hover:text-cyan-700'>Sign out</button>
                ) : (
                <NavLink
                to='signin'
                className={({ isActive }) =>
                isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                }
                >
                    Sign in
                </NavLink>
            )}
       </div>
    </div>
  )
}

export default Sidebar
