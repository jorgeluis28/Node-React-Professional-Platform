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
                    <h2 className="title">  Goal(s). </h2>
                    <p>
                        ● Cultivate a culture of professionalism among South Sudanese and to bring various skill sets under one 
                            umbrella to build a strong nation. <br/>
                        ● To unite professionals to achieve greater goods <br/></p>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;