import React from 'react'
import LOGO from "../assets/logo.svg";
//import { Carousel } from "flowbite-react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Slider1 from '../assets/images/slider/1.webp';
import Slider2 from '../assets/images/slider/2.webp';
import Slider3 from '../assets/images/slider/3.webp';
import Slider4 from '../assets/images/slider/4.webp';

export default function Home() {
  return (
    <React.Fragment>

      <Carousel>
        <img src={Slider1} alt="..." />
        <img src={Slider2} alt="..." />
        <img src={Slider3} alt="..." />
        <img src={Slider4} alt="..." />
      </Carousel>
      <div className="page-content">
        <div className="h-[520px] w-[1050px] flex justify-center items-center mx-auto">


        </div>

        <div className='flex justify-center items-center'>
          <img src={LOGO} alt="logo" className='m-2 h-16 inline' />
          <h1 className='m-0 p-0 inline text-2xl font-bold text-violet-700'>3 ANGELS' CALL MINISTRY (3acm)</h1>
        </div>


        <h2 className='text-center text-violet-900 font-bold hover:text-violet-400'>Youth Volunteering for His cause in the Last Days</h2>


      </div>
    </React.Fragment>

  )
}
