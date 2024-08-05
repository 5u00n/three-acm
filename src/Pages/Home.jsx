import React from 'react'
import LOGO from "../assets/logo.svg";
import { Container, UncontrolledCarousel } from 'reactstrap';

import Slider1 from '../assets/images/slider/1.jpg';
import Slider2 from '../assets/images/slider/2.jpg';
import Slider3 from '../assets/images/slider/3.jpg';
import Slider4 from '../assets/images/slider/4.jpg';

export default function Home() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
          <div className='d-flex align-items-center justify-content-center'>
            <img src={LOGO} alt="logo" height="70" className='m-2' />
            <h1 className='my-auto text-info' height="70"  >3 ANGELS' CALL MINISTRY (3acm)</h1>
          </div>
          <h2 className='text-center text-info'>Youth Volunteering for His cause in the Last Days</h2>

          <div className='rounded'>
            <UncontrolledCarousel className='rounded'
              items={[
                {
                  altText: 'Slide 1',
                  caption: 'Slide 1',
                  key: 1,
                  src: Slider1
                },
                {
                  altText: 'Slide 2',
                  caption: 'Slide 2',
                  key: 2,
                  src: Slider2
                },
                {
                  altText: 'Slide 3',
                  caption: 'Slide 3',
                  key: 3,
                  src: Slider3
                },
                {
                  altText: 'Slide 4',
                  caption: 'Slide 4',
                  key: 4,
                  src: Slider4
                }
              ]}
            />
          </div>

        </Container>
      </div>
    </React.Fragment>

  )
}
