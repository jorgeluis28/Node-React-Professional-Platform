import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function about(){
return (
    <>
    <IndexNavbar />

    <div className="section  text-center">
        <Container>
            <h2 className="title"> Basics </h2>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                </Col>
            </Row>
            <h3 className="title"> Email </h3>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                </Col>
            </Row>
            <h3 className="title"> Calendar </h3>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                </Col>
            </Row>
            <h3 className="title">  Folders & Work Organization </h3>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                </Col>
            </Row>
            <h3 className="title"> Filing System </h3>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                </Col>
            </Row>
        </Container>
    </div>
    </>
    )
}

export default about;