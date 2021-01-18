import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjZero, homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>      
      <HeroSection {...homeObjZero} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      {/* <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} /> */}
      <Pricing />
    </>
  );
}

export default Home;
