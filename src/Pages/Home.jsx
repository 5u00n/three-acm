import React from 'react'
import LOGO from "../assets/logo.svg";
import { Carousel } from "flowbite-react";

import Slider1 from '../assets/images/slider/1.jpg';
import Slider2 from '../assets/images/slider/2.jpg';
import Slider3 from '../assets/images/slider/3.jpg';
import Slider4 from '../assets/images/slider/4.jpg';

export default function Home() {
  return (
    <React.Fragment>
      <div className="page-content">
      <div className='flex justify-center items-center'>
            <img src={LOGO} alt="logo" className='m-2 h-16 inline' />
            <h1 className='m-0 p-0 inline text-2xl font-bold text-violet-700'>3 ANGELS' CALL MINISTRY (3acm)</h1>
          </div>
          <div className="h-[520px] w-[1050px] flex justify-center items-center m-auto">
            <Carousel>
              <img src={Slider1} alt="..." />
              <img src={Slider2} alt="..." />
              <img src={Slider3} alt="..." />
              <img src={Slider4} alt="..." />
            </Carousel>
          </div>

          
          <h2 className='text-center text-violet-900 font-bold hover:text-violet-400'>Youth Volunteering for His cause in the Last Days</h2>


      </div>
    </React.Fragment>

  )
}
