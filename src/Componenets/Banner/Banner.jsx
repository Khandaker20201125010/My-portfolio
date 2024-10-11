import React from 'react';
import prof from '../../assets/images/profile.png'
const Banner = () => {
    return (
        <div className='md:flex md:container md:m-auto sm:mx-auto sm:container p-10'>
            <div className='text-white md:w-1/2 md:my-20 max-sm:p-20'> 
                <h3>Hi,There</h3>
                <h1 className='mx-2'>I'm a</h1>
                 <h3 className='text-6xl text-yellow-300 font-bold md:flex md:w-1/2'>Frontend Developer.</h3>
                 <p className='md:w-3/4 mt-5 md:text-xl'>I enjoy building visually appealing solid and scalable frontend products with greater user experiences .</p>
            </div>
            <div className='mb-10'>
                <img className='w-96 h-96 rounded-lg' src={prof} alt="" />

            </div>
            
        </div>
    );
};

export default Banner;