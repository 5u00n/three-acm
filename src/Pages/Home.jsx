import React from 'react'
import LOGO from "../assets/cropped-3acm.png";
import { Container, UncontrolledCarousel } from 'reactstrap';

export default function Home() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
          <div className='d-flex align-items-center justify-content-center'>
            <img src={LOGO} alt="logo" height="70" className='m-2' />
            <h1 className='my-auto text-info' height="70"  >3 ANGELS' CALL MINISTRY</h1>
          </div>
          <h2 className='text-center text-info'>Youth Volunteering for His cause in the Last Days</h2>

          <UncontrolledCarousel
            items={[
              {
                altText: 'Slide 1',
                caption: 'Slide 1',
                key: 1,
                src: 'https://picsum.photos/id/123/1200/600'
              },
              {
                altText: 'Slide 2',
                caption: 'Slide 2',
                key: 2,
                src: 'https://picsum.photos/id/456/1200/600'
              },
              {
                altText: 'Slide 3',
                caption: 'Slide 3',
                key: 3,
                src: 'https://picsum.photos/id/678/1200/600'
              }
            ]}
          />

        </Container>
      </div>
    </React.Fragment>

  )
}
