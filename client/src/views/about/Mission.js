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
                    <h2 className="title">  Mission statement. </h2>
                    <h4 className="join_title"> MEMBERS/PROFESSIONALS BENEFITS </h4> <br/>
                    <p>
                        ● Work together to move our nation forward and therefore, be proud South Sudanese professionals, 
                            work for South Sudanese and always put South Sudanese interest first. <br/>
                        ● Work together to move forward together, now and future <br/>
                        ● Work together to professionally illuminate, now and future <br/></p>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
