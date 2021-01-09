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
                    <h2 className="title">  Objectives  </h2>
                    <p>
                        ● Connect professionals across the globe <br/>
                        ● Mobilize human capital or resources (the know-how) under one umbrella <br/>
                        ● Solve brain-drain conundrum (Redirect brain-drain flow traffic) <br/>
                        ● Networking <br/>
                        ● Unite for common purposes <br/>
                        ● Know ourselves <br/>
                        ● Be the think tank powerhouse </p>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
