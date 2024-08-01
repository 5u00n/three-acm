import React from 'react'
import Header from './Header'
import Footer from './Footer'

function PublicLayout(props) {
    return (
        <React.Fragment>
            <Header />
            <div className="main-content mb-3">
                {props.children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default PublicLayout