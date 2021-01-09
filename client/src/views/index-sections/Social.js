import React from "react";

// reactstrap components
import { Button, Container, Row, Col} from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section social">
        <Container className="text-center">
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <p className="follow_text"> Follow Us On!</p>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="btn-linkedin"
                href="#pablo"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-linkedin" /> Linkedin
              </Button>

              <Button
                className="youtube-sharrre btn-round  ml-2"
                color="youtube-bg"
                href="#pablo"
                id="tooltip840791274"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-youtube" /> Youtube
              </Button>

              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
          
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#pablo"
                id="tooltip3373767"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
        
              <Button
                className="Instagram-sharrre btn-round ml-2"
                color="instagram-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
