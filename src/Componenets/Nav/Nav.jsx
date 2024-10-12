import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [showKhandaker, setShowKhandaker] = useState(false);

    const handleMouseEnter = () => {
        setShowKhandaker(true);
    };

    const handleMouseLeave = () => {
        setShowKhandaker(false);
    };
    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => {
                        console.log('Is Active:', isActive);
                        return isActive
                            ? 'font-bold text-blue-600 hover:text-lime-300'
                            : 'font-bold text-black hover:text-blue-600';
                    }}
                    to='/'
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? 'font-bold text-blue-600 hover:text-lime-300'
                            : 'font-bold text-black hover:text-blue-600'
                    }
                    to='/projects'
                >
                    Projects
                </NavLink>
            </li>
        </>
    );
    return (
        <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
            <div className="navbar bg-transparent ">
                <div className="navbar-start fixed ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow nav-link">
                            {links}
                        </ul>
                    </div>





                </div>
                <div className="navbar-end w-full">
                    <a
                        className="text-2xl text-white px-40 font-bold inline-block relative" // Added relative positioning
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* K.I.H Text */}
                        <span
                            className={`block transition-opacity duration-300 ease-in-out ${showKhandaker ? 'opacity-0' : 'opacity-100'}`}
                        >
                            K.I.H
                        </span>

                        {/* Khandaker Text */}
                        <span
                            className={`absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${showKhandaker ? 'opacity-100 animate__animated animate__fadeInRight' : 'opacity-0'}`}
                        >
                            Khandaker Istekharul Haque
                        </span>
                    </a>
                </div>
               

            </div>
            

        </div>
    );
};

export default Nav;