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
                    <h2 className="title"> Expectations </h2>
                    <p>
                        ● Respect each other views (be professionals) <br/>
                        ● Be objective in your views <br/>
                        ● Avoid fake or misinformation (factcheck your sources of information before posting) <br/>
                        ● Anything short of professionalism and the expectations may be rejected by this page’s administration. <br/> </p>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;