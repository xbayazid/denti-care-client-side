import React from 'react';
import Banner from '../Banner/Banner';
import DoctorIntro from '../DoctorIntro/DoctorIntro';
import Rewards from '../Rewards/Rewards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-100'>
          <Banner></Banner>
          <Services></Services>
          <DoctorIntro></DoctorIntro>
          <Rewards></Rewards>
        </div>
    );
};

export default Home;