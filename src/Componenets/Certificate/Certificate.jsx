import React from 'react';
import certi from '../../assets/images/certi.png'
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Certificate = () => {
    return (
        <div>
           
            <div className='container mx-auto flex justify-center items-center p-5'>
            <div className='container m-auto '>
            <Link to='/'>
            <button className='btn h-32 w-32 rounded-full bg-transparent text-purple-700'><FaArrowCircleLeft size={100} /></button>
            </Link>

            </div>
            
            <img src={certi} alt="" />
            
        </div>
        </div>
    );
};

export default Certificate;