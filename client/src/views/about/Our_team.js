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
                    <h2 className="title">  Our Team </h2>
                    <div className="column">
                        <div className="card">
                            <img alt="Mari" src={require("assets/img/member01.png")} />
                            <div className="container">
                                    <p className="name"> Mike Ross </p>
                                    <p className="card_title">CEO & Founder</p>
                                    <p className="card_title"> Canada </p>
                                    <p className="card_title"> ross0101@gmail.com </p>
                                    <p><button className="contact_btn">Contact</button></p>
                                </div>
                            </div>
                        </div>

                    <div className="column">
                        <div className="card">
                            <img alt="Mari" src={require("assets/img/member02.jpg")} />
                            <div className="container">
                                <p className="name"> John Dae </p>
                                <p className="card_title">Art Director</p>
                                <p className="card_title"> Canada </p>
                                <p className="card_title"> 14378861388 </p>
                                <p><button className="contact_btn">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="card">
                            <img alt="Mari" src={require("assets/img/member03.jpg")} />
                            <div className="container">
                                <p className="name"> Marry Gi </p>
                                <p className="card_title">Designer</p>
                                <p className="card_title"> Canada </p>
                                <p className="card_title"> ross0101@gmail.com </p>
                                <p><button className="contact_btn">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;