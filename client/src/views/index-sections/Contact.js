import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/about01.jpg"),
  },
  {
    src: require("assets/img/aboutus04.png"),
  },
  {
    src: require("assets/img/aboutus05.png"),
    // altText: "Here it is",
    // caption: "Here it is"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>            
            <Col className="ml-auto mr-auto" md="8">
            <h4 className="images-title"> CONTACT DETAILS </h4>
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        {/* <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        /> */}
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
          <Row className="contact">
            <h4 className="about_title"> About Us </h4>
            <p> The South Sudanese Professionals Worldwide Forum (SSPWF) was founded with the aim to bring together 
              cross-disciplinary South Sudanese professionals with limitless skill sets at home and abroad under one 
              umbrella in order to meet the pressing demand skilled labour from GOSS, UN Agents, businesses, 
              and not-forprofit organizations. To achieve that said goal, SSPWF is the platform to connect 
              and unite interdisciplinary skills, human resources and their best uses/practices 
              or the seekers of professionals’ skills and know-how. SSPWF envisions building a database of South Sudanese 
              professionals’ pools as your one-stop-shop for the esteemed clients operating within South Sudan and facing a dire 
              skilled labour shortage. SSPWF aspires to lead, bridge knowledge-gap, connect and inspire development by pooling 
              and channeling skilled labour or human capital where it is needed the most, thus empowering and accelerating 
              nation-building in enormous capacities. With the professional skill sets and know-how which are crucial to frog-leaf 
              South Sudan to meet her 21st-century development goals. </p>

            <h4 className="about_title">  Why join SSPWF?  </h4>
            <p> <span className="about_subtitle"> MEMBERS/PROFESSIONALS BENEFITS </span>  <br/>
              ● The South Sudanese Professionals Worldwide Forum (SSPWF) is a unique platform to unite 
              interdisciplinary skills, resources and their best uses/practices.<br/> 
              ● SSPWF members will engage in a robust dialogue on the most challenging topics of the 21st century 
              with their peers. No other forum focuses on the most important discussions. Our insights and connections will 
              reach far, now and future. <br/>
              ● Join SSPWF to advance your outreach effort to wider audiences and to uplift your consulting services to the next
                level.  <br/>
              ● The south Sudanese professionals across the globe engage actively in SSPWF. 
                Your potential clients and competitors are likely associated with SSPWF. <br/>
              ● This is growth opportunities, technical resources, and a support of a community of like-minded.<br/>    
                <span className="about_subtitle"> GOSS and BUSINESSES BENEFITS </span> <br/>
              ● Provide consulting services in various professions both in public and private sectors,  <br/>
              ● Data analysis for various GOSS departments  <br/>
              ● Businesses or offices setup <br/>
              ● Develop systems in various GOSS departments  <br/>
              ● Invest in real estate: build people's houses (real deal)  <br/>
              ● Design projects that are oriented towards providing basic services to people-get funding from UN agencies  <br/>
              ● Provide skills trainings (onsite or online)<br/>
                <span className="about_subtitle"> SOUTH SUDANESE (publics) </span> <br/>
                ● Access to the most online courses, articles, videos and publications. <br/>
                ● Access to vetted information (your trusted sources of information) <br/>
                ● Access largest South Sudanese professionals’ community  </p>
            <h4 className="about_title"> Objectives </h4>
            <p> 
              ● Connect professionals across the globe <br/>
              ● Mobilize human capital or resources (the know-how) under one umbrella <br/>
              ● Solve brain-drain conundrum (Redirect brain-drain flow traffic) <br/>
              ● Networking <br/>
              ● Unite for common purposes <br/>
              ● Know ourselves <br/>
              ● Be the think tank powerhouse  </p>
            <h4 className="about_title"> Mission statement.</h4>
            <p>
              ● Work together to move our nation forward and therefore, be proud South Sudanese professionals, 
              work for South Sudanese and always put South Sudanese interest first. <br/>
              ● Work together to move forward together, now and future <br/>
              ● Work together to professionally illuminate, now and future <br/>
            </p>
            <h4 className="about_title"> Goal(s) </h4>
            <p>
              ● Cultivate a culture of professionalism among South Sudanese and to bring various skill sets under one 
              umbrella to build a strong nation. <br/>
              ● To unite professionals to achieve greater goods <br/>
            </p>
            <h4 className="about_title"> Our values </h4>
            <p>
              ● Respect  <br/>
              ● Professionalism <br/>
              ● Holism: at SSPWF, we not only respect each other's cultural norms but also uphold various religious views, 
              we all deserve equal treatments.<br/>
            </p>
            <h4 className="about_title"> Expectations </h4>
            <p> 
              ● Respect each other views (be professionals) <br/>
              ● Be objective in your views <br/>
              ● Avoid fake or misinformation (factcheck your sources of information before posting) <br/>
              ● Anything short of professionalism and the expectations may be rejected by this page’s administration. <br/>
            </p>
            <h4 className="about_title"> Our Team </h4>
            <Row>
              <div className="column">
                <div className="card">
                  <img alt="Mari" src={require("assets/img/member01.png")} />
                  <div className="container">
                    <p className="name"> Mike Ross </p>
                    <p className="card_title">CEO & Founder</p>
                    <p className="card_content"> Canada </p>
                    <p className="card_content"> ross0101@gmail.com </p>
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
                    <p className="card_content"> Canada </p>
                    <p className="card_content"> 14378861388 </p>
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
                    <p className="card_content"> Canada </p>
                    <p className="card_content"> ross0101@gmail.com </p>
                    <p><button className="contact_btn">Contact</button></p>
                  </div>
                </div>
              </div>
            </Row>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
