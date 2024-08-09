import React from 'react'
import Header from './Header'
import Footer from './Footer'

function PublicLayout(props) {
    return (
        <React.Fragment>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow main-content mb-3 top-0 absolute">
                {props.children}
              </div>
              <Footer />
            </div>
        </React.Fragment>
    )
}

export default PublicLayout