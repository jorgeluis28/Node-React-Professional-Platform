import React from "react";

// reactstrap components
import { Row, Col , Container } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
    <Container>
      <div className="tim-container">
        <div id="images">
            <Row>
              <Col md="6" sm="12">
                <h4 className="images-title"> PICTURES </h4>
                <img width="100%" height="40%"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/uriel-soberanes.jpg")}
                />
                <p className="text-center"> Night </p>
                <img width="100%" height="40%"
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/antoine-barres.jpg")}
                />
                <p className="text-center"> Big Lake </p>
              </Col>
              <Col md="6" sm="12">
                <h4 className="images-title"> VIDEOS </h4>
                <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" title="iframe01" className="img-rounded img-responsive"
                  width="100%" height="40%"></iframe>
                <p className="text-center"> SKi</p>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" title="iframe02" className="img-rounded img-responsive"
                  width="100%" height="40%"></iframe>
                <p className="text-center"> Musician </p>
              </Col>
            </Row>
        </div>
      </div>            
    </Container>
    </>
  );
}

export default SectionTypography;
