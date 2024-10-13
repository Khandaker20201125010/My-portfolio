import React from 'react';
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
const DesignandEngineering = () => {
    return (
        <div className='md:flex container m-auto mt-40 justify-between px-20 '>
            <div className='w-full'>
                <h3 className='text-6xl font-bold text-blue-700'>Design</h3>
                <p className='mt-5  text-xl font-semibold'>I am a designer at heart. You'll often find me deep in stylesheets, adjusting font sizes, and perfecting layouts. My focus is on crafting smooth, intuitive user experiences, all while keeping things stylish and modern.</p>
                <h3 className="flex justify-center items-center mx-auto text-center mt-10 ">
                    <GoArrowDown className=" text-indigo-800 " size={250} />
                </h3>

            </div>
            <div>

            </div>
            <div className='mt-40 w-full'>
            <h3 className="flex justify-center items-center mx-auto text-center max-sm:mt-5 max-sm:hidden ">
                    <GoArrowUp className=" text-blue-500 " size={250} />
                </h3>
                <h3 className='text-6xl font-bold text-emerald-600'>Engineering</h3>
                <p className='mt-5  text-xl font-semibold'>
                    In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast .and also i have little bit knowledge of backend and some other language .
                </p>
            </div>

        </div>
    );
};

export default DesignandEngineering;