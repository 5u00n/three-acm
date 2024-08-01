import React from 'react';
import { Container, Row, Col } from "reactstrap";

function Footer() {

  // Inline style for the footer container to ensure it sticks to the bottom
  const footerStyle = {
    marginTop: 'auto', // This pushes the footer to the bottom of the flex container
  };


  return (
    <React.Fragment>
      <footer className="footer" style={footerStyle}>
        <Container fluid={true}>
          <Row>
            <Col sm={6}>{new Date().getFullYear()} © 3am.org</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
                Created with <i className="mdi mdi-heart text-danger"></i> by
                <a href="https://github.com/5u00n">{" projectopel"}</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer;