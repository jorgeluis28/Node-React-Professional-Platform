import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <div className="tim-container">
        <div id="images">          
            <Row>   
              <Col className="service" md="6" sm="6" xs="12">
                <div className="c">
                  <div className="dd dd1">
                    <div className="dd-a"><span>  <h4 className="images-title">  SERVICES </h4> </span></div>
                    <input type="checkbox" />
                    <div className="dd-c">
                      <ul>
                        <li><a className="service_title" href="accounting_service"><span> Accounting Services </span></a></li>
                        <li><a className="main_text" href="booking_keeping"><span> Booking Keeping </span></a></li>
                        <li><a className="main_text" href="Auditing"><span> Auditing </span></a></li>
                        <li><a className="main_text" href="Business_tax"><span> Business Tax: Domestic and International </span></a></li>
                        <li><a className="service_title" href="economic_analysis"><span> Economic analysis </span></a></li>
                        <li><a className="main_text" href="policy_analysis"><span> Policy Analysis </span></a></li>
                        <li><a className="main_text" href="data_analysis"><span> Data Analysis </span></a></li>
                        <li><a className="main_text" href="case_study"><span> Case Study </span></a></li>
                        <li><a className="main_text" href="research"><span> Research </span></a></li>
                        <li><a className="main_text" href="financial_analysis"><span> Financial Analysis </span></a></li>
                        <li><a className="main_text" href="social_service"><span>  Social Services Analysis and Evaluation </span></a></li>
                        <li><a className="service_title" href="project_design"><span> Project Design and Evaluation </span></a></li>
                        <li><a className="service_title"href="system_development"><span> System Development  </span></a></li>
                        <li><a className="service_title" href="internsheps"><span> Internships: New graduates </span></a></li>
                        <li><a className="service_title" href="skills"><span> Skills Training </span></a></li>
                        <li><a className="service_title" href="human resources"><span> Human Resources Services </span></a></li>
                        <li><a className="service_title" href="office_design"><span> Office Design, Setup and Organization </span></a></li>
                        <li><a className="service_title" href="professional_work"><span> Professional Work Adventure  </span></a></li>
                        <li><a className="main_text" href="spend"><span> Spend 3- or 6-months working while being paid in your profession in South Sudan  </span></a></li>                    
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="service" md="6" sm="6" xs="12">
                <div className="c">
                  <div className="dd">
                    <div className="dd-a"><span>  <h4 className="images-title">  SKILLS TRAINING </h4> </span></div>
                    <input type="checkbox" />
                    <div className="dd-c">
                    <ul>
                        <li><a className="service_title" href="basics"><span>Basics</span></a></li>
                        <li><a className="main_text" href="email"><span> Email </span></a></li>
                        <li><a className="main_text" href="outlook"><span> Outlook </span></a></li>
                        <li><a className="main_text" href="gmail"><span> Gmail </span></a></li>
                        <li><a className="service_title" href="yahoo"><span> Yahoo </span></a></li>
                        <li><a className="main_text" href="calendar"><span> Calendar </span></a></li>
                        <li><a className="main_text" href="folders"><span> Folders &amp; Work Organization </span></a></li>
                        <li><a className="main_text" href="filling_system"><span> Filing System </span></a></li>
                        <li><a className="service_title" href="ms_office"><span> MS Office </span></a></li>
                        <li><a className="main_text" href="ms"><span>MS Excel, MS word and PowerPoint</span></a></li>
                        <li><a className="main_text" href="understanding"><span>  Understanding Business Fundamentals </span></a></li>
                        <li><a className="service_title" href="economic_analysis"><span> Project Design and Evaluation </span></a></li>
                        <li><a className="main_text"href="cash"><span> Cash Flow </span></a></li>
                        <li><a className="main_text" href="profit"><span> Profit/Loss </span></a></li>
                        <li><a className="main_text" href="finalcial"><span> Financial Statement </span></a></li>
                        <li><a className="main_text" href="quickbooks"><span> QuickBooks </span></a></li>
                        <li><a className="main_text" href="apply"><span> Applied Basic Economic Concepts or Theories</span></a></li>
                        <li><a className="main_text" href="spend"><span>Demand &amp; Supply </span></a></li>                    
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
        </div>
      </div>
    </>
  );
}

export default SectionTypography;
