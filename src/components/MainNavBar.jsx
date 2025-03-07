import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from "prop-types"; 
const MainNavBar = ({ cartCount }) => {
    
    return (
        <div className="mt-5 navbar bg-base-100 shadow-md px-4 max-w-[1540px] mx-auto">
            {/* Left Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Products">Products</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
            </div>

            {/* Middle Section */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Products">Products</NavLink></li>
                    {/* <li><NavLink to="/statistics">Statistics</NavLink></li> */}
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="navbar-end space-x-3">
            <div className="flex items-center space-x-2">
                    <span>{cartCount}</span> <img src="/Frame-2.svg" alt="Cart" />
                </div>
                <div className="flex items-center space-x-2">
                    <span>0</span> <img src="/Frame3.svg" alt="Rating" />
                </div>
            </div>
        </div>
    );
};



MainNavBar.propTypes = {
    data: PropTypes.array.isRequired,
  };
export default MainNavBar;
