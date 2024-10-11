import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='min-h-full'>
            <div className=''>
            <Outlet></Outlet>
            

            </div>
           
        </div>
    );
};

export default Main;