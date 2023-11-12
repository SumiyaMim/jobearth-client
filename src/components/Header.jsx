/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <Navbar/>
            </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <div className="menu p-6 w-80 min-h-full bg-white">
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}


export default Header
