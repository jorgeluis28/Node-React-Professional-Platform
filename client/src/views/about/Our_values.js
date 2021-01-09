import React from "react";
import About from "views/about/About.js";
import $ from 'jquery';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

function LandingPage() {

  $(window).on('load',function() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  });

  return (
    <>
    <div className="main">
        <About />

        <div className="section-dark text-center ">
            <Container>
            <Row className="join">
                <Col className="ml-auto mr-auto" md="12">
                    <h2 className="title">  Our values </h2>
                    <p>
                        ● Respect  <br/>
                        ● Professionalism <br/>
                        ● Holism: at SSPWF, we not only respect each other's cultural norms but also uphold various religious views, 
                        we all deserve equal treatments.<br/> </p>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;