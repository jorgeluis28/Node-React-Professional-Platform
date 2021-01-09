import React from "react";

function IndexHeader() {
  return (
    <>
      <div className="page-header section-dark" style={{ backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")"}} >
        <div className="filter" />
          <div className="content-center">
              <div className="title-brand">
                <h1 className="presentation-title"> SSPWF  GATHERS PROFESSIONALS' SKILLS AND TALENTS ACROSS THE GLOBE TO MEET DIRE 
                LABOUR SHORTAGE FOR GOVERNMENT OF SOUTH SUDAN, BUSINESSES AND NGOs <br/>
                  <a href="/#"> BECOME A MEMBER </a> <br/>
                  <a href="/individual_signup"> INDIVIDUAL </a><br/>
                  <a href="/businesses_signup"> BUSINESS </a>
                </h1>
              </div>
          </div>
        {/* <div className="moving-clouds" style={{backgroundImage: "url(" + require("assets/img/clouds.png") + ")"}}/> */}
      </div>
    </>
  );
}

export default IndexHeader;
