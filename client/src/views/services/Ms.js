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
            <h2 className="title"> MS Office </h2>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                </Col>
            </Row>
            <h3 className="title"> MS Excel, MS word and PowerPoint </h3>
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