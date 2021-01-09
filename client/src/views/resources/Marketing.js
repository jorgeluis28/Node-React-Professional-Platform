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
            <h2 className="title"> Marketing </h2>
            <Row>
                <Col md="12">
                    <img  alt="architecture" className="sample_img" src={require("assets/img/sample.jpg")} />
                    <p className="main_text text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
    </>
    )
}

export default about;