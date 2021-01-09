import React from "react";
import axios from "axios"; 

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,

} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";


class about extends React.Component{
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        axios.post("http://localhost:5000/users/memberinfo",{
            profession: "Construction and Extraction"
        })
        .then((result) =>{
	    	this.setState({ getdata: result.data.result});
            this.setState({
                data: this.state.getdata,
            })
        }
    )}

    render(){
        return (
            <>
            <IndexNavbar />
            <div className="section  text-center">
                <div className="container">
                    <h2 className="title">  Construction and Extraction  </h2>
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
                </div>
            </div>
            
            <div className="section section-dark text-center">
                <div className="container-fluid container01">
                    <h2 className="title"> Our Members </h2>
                    <Row>
                        {this.state.data.map((dynamicComponent, i) => <Content 
                        key = {i} componentData = {dynamicComponent}/>)}    
                    </Row>               
                </div>
            </div>
            </>
        )
    }
}

class Content extends React.Component {
    render() {
       return (
            <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    {
                        this.props.componentData.gender == 'Male'? <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                            alt="..." src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                            />
                        </a> : <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                            alt="..." src={require("assets/img/faces/joe-gardner-2.jpg")}
                            />
                        </a>
                    }
                    </div>
                    <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                            <CardTitle tag="h4" className="cardtitle"> {this.props.componentData.first_name} {this.props.componentData.family_name} </CardTitle>
                            <h5 className="card-category"> {this.props.componentData.profession} </h5>
                            <h5 className="card-category"> {this.props.componentData.specify} </h5>
                            <h5 className="card-category"> {this.props.componentData.country} </h5>
                            <h5 className="card-category"> {this.props.componentData.email} </h5>
                        </div>
                    </a>
                    <h6 className="card-description text-center">
                        {this.props.componentData.bio}
                    </h6>
                    </CardBody>
                </Card>
            </Col>
       );
    }
 }


export default about;