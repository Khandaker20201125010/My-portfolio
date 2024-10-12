import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../Componenets/Nav/Nav';
import bg from '../assets/images/e.gif'
import Footer from '../Componenets/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('certificate') 
    return (
        <div className='min-h-full' style={{ backgroundImage: `url(${bg})`, height:'100%' }}>
            <div className=''>
            {noHeaderFooter || <Nav></Nav>}
           <div className='min-h-screen'>
           <Outlet></Outlet>
           </div>
         <div className='max-h-screen' >
         {noHeaderFooter || <Footer></Footer>}
         </div>
            

            </div>
           
        </div>
    );
};

export default Main;