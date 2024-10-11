import React from 'react';
import Nav from '../Componenets/Nav/Nav';
import Banner from '../Componenets/Banner/Banner';

const Home = () => {
    return (
      <div>
          <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
           <Nav></Nav>
           <Banner></Banner>
       
        </div>  
      </div>
    );
};

export default Home;