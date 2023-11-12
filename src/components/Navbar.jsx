/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/logo.png';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser(); 
        navigate('/signin'); 
    };

  return (
    <div>
      <div className='bg-white shadow'>
            <div className="w-full items-center navbar max-w-7xl mx-auto py-3 pl-8 pr-5 lg:pl-12 lg:pr-14">
                <img src={logo} alt="" className='w-7'/>
                <div className="flex-1 mx-2 text-2xl text-cyan-700 font-semibold">JobEarth</div>
                <div className="flex-none hidden lg:block">
                    <div className='flex items-center gap-6'>
                        <NavLink 
                        to='/'
                        className={({ isActive }) =>
                        isActive ? 'font-medium text-base py-0.5 border-b-2 border-cyan-600' : 'font-medium text-base'
                        }
                        >
                            Home
                        </NavLink>

                        <NavLink 
                        to='/add-job'
                        className={({ isActive }) =>
                        isActive ? 'font-medium text-base py-0.5 border-b-2 border-cyan-600' : 'font-medium text-base'
                        }
                        >
                            Add Job
                        </NavLink>

                        {user?.email ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="avatar">
                                <div className="w-9 rounded-full mt-1.5">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                                </label>
                                <ul
                                tabIndex={0}
                                className="menu-sm dropdown-content flex flex-col gap-2 mt-8 z-[1] p-5 shadow text-center bg-base-100 rounded-box w-60"
                                >
                                <li>
                                <NavLink 
                                    className='font-medium text-base hover:text-cyan-700 text-center'                
                                    >
                                    {user.displayName}
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/user/my-profile'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                                    }                                    
                                    >
                                    My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/user/my-posted-jobs'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                                    }                                    
                                    >
                                    My Posted Jobs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/user/my-bids'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                                    }                                    
                                    >
                                    My Bids
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                    to='/user/bid-requests'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-base text-cyan-700' : 'font-medium text-base'
                                    }                                    
                                    >
                                    Bid Requests
                                    </NavLink>
                                </li>
                                <div className='divider my-0'></div>
                                <li>
                                    <button onClick={handleSignOut} className="font-medium text-base hover:text-cyan-700">Sign out</button>
                                </li>
                                </ul>
                          </div>
                            ) : (
                            <NavLink
                            to='/signin'
                            className={({ isActive }) =>
                            isActive ? 'font-medium text-base py-0.5 border-b-2 border-cyan-600' : 'font-medium text-base'
                            }
                            >
                                Sign in
                            </NavLink>
                        )}
                        
                    </div>
                </div>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
            </div>
      </div>
    </div>
  )
}

export default Navbar
