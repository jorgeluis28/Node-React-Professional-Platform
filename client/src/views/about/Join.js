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
                    <h2 className="title">  Why join SSPWF?  </h2>
                    <h4 className="join_title"> MEMBERS/PROFESSIONALS BENEFITS </h4> <br/>
                    <p>
                        ● The South Sudanese Professionals Worldwide Forum (SSPWF) is a unique platform to unite 
                        interdisciplinary skills, resources and their best uses/practices.<br/> 
                        ● SSPWF members will engage in a robust dialogue on the most challenging topics of the 21st century 
                        with their peers. No other forum focuses on the most important discussions. Our insights and connections will 
                        reach far, now and future. <br/>
                        ● Join SSPWF to advance your outreach effort to wider audiences and to uplift your consulting services to the next
                            level.  <br/>
                        ● The south Sudanese professionals across the globe engage actively in SSPWF. 
                            Your potential clients and competitors are likely associated with SSPWF. <br/>
                        ● This is growth opportunities, technical resources, and a support of a community of like-minded.<br/></p>

                    <h4 className="join_title"> GOSS and BUSINESSES BENEFITS </h4> <br/>
                    <p>
                        ● Provide consulting services in various professions both in public and private sectors,  <br/>
                        ● Data analysis for various GOSS departments  <br/>
                        ● Businesses or offices setup <br/>
                        ● Develop systems in various GOSS departments  <br/>
                        ● Invest in real estate: build people's houses (real deal)  <br/>
                        ● Design projects that are oriented towards providing basic services to people-get funding from UN agencies  <br/>
                        ● Provide skills trainings (onsite or online)<br/></p>
                    
                    <h4 className="join_title"> SOUTH SUDANESE (PUBLICS) </h4> <br/>
                    <p>
                        ● Access to the most online courses, articles, videos and publications. <br/>
                        ● Access to vetted information (your trusted sources of information) <br/>
                        ● Access largest South Sudanese professionals’ community  </p>
                </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
