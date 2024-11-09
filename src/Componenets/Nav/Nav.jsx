import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
import { LiaTimesSolid } from 'react-icons/lia';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    const [showKhandaker, setShowKhandaker] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false);
    };

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
            <div className="navbar bg-transparent">
                <div className="navbar-start fixed z-30">
                    <div className="flex mx-10 gap-5 lg:gap-10 justify-center items-center">
                        {/* Burger Icon */}
                        <div onClick={handleClick}>
                            {click ? (
                                <AiOutlineClose size={30} className="text-xl text-yellow-500 lg:text-2xl cursor-pointer" />
                            ) : (
                                <SlMenu size={30} className="text-xl lg:text-2xl text-yellow-500 font-bold cursor-pointer" />
                            )}
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div
                        className={`fixed top-0 left-0 w-[550px] h-full bg-base-200 transition-transform duration-500 ease-in-out z-50 ${click ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        {/* Fixed Header in Burger Menu */}
                        <div className="sticky top-0 bg-base-200 px-4 py-3 md:py-4 border-b border-gray-700">
                            <div className="text-2xl font-bold flex justify-between items-center">
                                <a onClick={closeMenu} className="hover:text-orange-500 cursor-pointer border-2 border-orange-400">
                                    <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
                                </a>
                            </div>
                        </div>

                        {/* Scrollable Content with Hidden Scrollbar */}
                        <ul
                            className="overflow-y-scroll p-4 space-y-6 text-center text-3xl "
                            style={{
                                maxHeight: 'calc(100vh - 64px)',
                                scrollbarWidth: 'none', /* For Firefox */
                                msOverflowStyle: 'none' /* For Internet Explorer and Edge */
                            }}
                        >
                            {/* Hide Scrollbar for WebKit Browsers */}
                            <style jsx>{` ul::-webkit-scrollbar { display: none; } `}</style>

                           *** {links}    
                        </ul>
                    </div>

                    {/* Background Shadow (Overlay) */}
                    {click && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
                            onClick={closeMenu}  // Close menu when clicking on the overlay
                        ></div>
                    )}
                </div>

                <div className="navbar-end w-full">
                    <a
                        className="text-2xl text-white px-40 font-bold inline-block relative"
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
