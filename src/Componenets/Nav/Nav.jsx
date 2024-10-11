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
                            : 'font-bold text-white hover:text-blue-600';
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
                            : 'font-bold text-white hover:text-blue-600'
                    }
                    to='/allCollections'
                >
                    Our Collections
                </NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-transparent ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow nav-link">
                            {links}
                        </ul>
                    </div>

                    <div className="">
                        <a
                            className=" text-2xl text-white px-10 font-bold inline-block"
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
                                className={`absolute top-5 px-5 left-0 transition-opacity duration-300 ease-in-out ${showKhandaker ? 'opacity-100 animate__animated animate__fadeInRight' : 'opacity-0'}`}
                            >
                                Khandaker Istekharul Haque
                            </span>
                        </a>
                    </div>



                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className=' menu-horizontal gap-5 px-1 text-yellow'>
                        {links}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Nav;