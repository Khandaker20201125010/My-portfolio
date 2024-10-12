import React from 'react';
import Banner from '../Componenets/Banner/Banner';
import DesignandEngineering from '../Componenets/DesignandEngineering/DesignandEngineering';
import BuildAndDesign from '../Componenets/BuildAndDesign/BuildAndDesign';

const Home = () => {
    return (
      <div>
          <div className=''>
          
           <Banner></Banner>
           <DesignandEngineering></DesignandEngineering>
           <BuildAndDesign></BuildAndDesign>
       
        </div>  
      </div>
    );
};

export default Home;