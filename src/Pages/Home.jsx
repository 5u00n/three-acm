import React from 'react'
import LOGO from "../assets/cropped-3acm.png";
import { Container } from 'reactstrap';

export default function Home() {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
          <div className='d-flex align-items-center justify-content-center'>
            <img src={LOGO} alt="logo" height="70" className='m-2'/>
            <h1 className='my-auto purple-400' height="70" color='purple' >3 ANGELS' CALL MINISTRY</h1>
          </div>
          <h2 className='text-center'>Youth Volunteering for His cause in the Last Days</h2>

        </Container>
      </div>
    </React.Fragment>

  )
}
