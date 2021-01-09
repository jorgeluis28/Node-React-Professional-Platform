import React from "react";

// // reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
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

    <div className="section section-dark text-center">
        <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
                <Col md="12">
                    <p className="about-description text-center">
                    The South Sudanese Professionals Worldwide Forum (SSPWF) was founded with the aim to bring together 
                    cross-disciplinary South Sudanese professionals with limitless skill sets at home and abroad under one 
                    umbrella in order to meet the pressing demand skilled labour from GOSS, UN Agents, businesses, 
                    and not-forprofit organizations. To achieve that said goal, SSPWF is the platform to connect 
                    and unite interdisciplinary skills, human resources and their best uses/practices 
                    or the seekers of professionals’ skills and know-how. SSPWF envisions building a database of South Sudanese 
                    professionals’ pools as your one-stop-shop for the esteemed clients operating within South Sudan and facing a dire 
                    skilled labour shortage. SSPWF aspires to lead, bridge knowledge-gap, connect and inspire development by pooling 
                    and channeling skilled labour or human capital where it is needed the most, thus empowering and accelerating 
                    nation-building in enormous capacities. With the professional skill sets and know-how which are crucial to frog-leaf 
                    South Sudan to meet her 21st-century development goals.
                    </p>
                </Col>
                <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                        />
                    </a>
                    </div>
                    <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                        <h6 className="card-category"> Canada </h6>
                        <h6 className="card-category"> Henry@gmail.com</h6>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        Teamwork is so important that it is virtually impossible
                        for you to reach the heights of your capabilities or make
                        the money that you want without becoming very good at it.
                    </p>
                    </CardBody>
                    <CardFooter className="text-center">
                    <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-twitter" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-linkedin" />
                    </Button>
                    </CardFooter>
                </Card>
                </Col>
                <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                    </a>
                    </div>
                    <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                        <h6 className="card-category"> United State </h6>
                        <h6 className="card-category"> Sophie@gmail.com</h6>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        A group becomes a team when each member is sure enough of
                        himself and his contribution to praise the skill of the
                        others. No one can whistle a symphony. It takes an
                        orchestra to play it.
                    </p>
                    </CardBody>
                    <CardFooter className="text-center">
                    <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-twitter" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-linkedin" />
                    </Button>
                    </CardFooter>
                </Card>
                </Col>
                <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                    </a>
                    </div>
                    <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                        <h6 className="card-category"> Spain </h6>
                        <h6 className="card-category"> Robert@gmail.com</h6>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        The strength of the team is each individual member. The
                        strength of each member is the team. If you can laugh
                        together, you can work together, silence isn’t golden,
                        it’s deadly.
                    </p>
                    </CardBody>
                    <CardFooter className="text-center">
                    <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-twitter" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-linkedin" />
                    </Button>
                    </CardFooter>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    </>
    )
}

export default about;