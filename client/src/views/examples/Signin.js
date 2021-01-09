import React, {Component} from "react";
import axios from "axios"; 

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col , Label } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

class LoginPage extends Component {
  state = {
      email: '',
      password: '',
    };

    onEmailChange = e => {
      this.setState({
        email: e.target.value
      });
    };

    onPasswordChange = e => {
      this.setState({
        password: e.target.value
      });
    };

    handleSubmit = e => {
      e.preventDefault();
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      const { history } = this.props;
      axios
        .post("http://localhost:5000/users/signin", data)
        .then(function(res){
          const result = res.data.status;
          if(result === "ok"){
            alert ("login is success")
            history.push('/userprofile');
          }
          else{
            console.log("login is fail")
            alert ("Enter the correct email and password")
            history.push('/signin');
          }
        })
        .catch(err => console.log(err));
    };
  render(){
    return (
      <>
        <IndexNavbar />
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Welcome</h3>
                  <Form className="register-form" onSubmit={this.handleSubmit}>
                    <label> <span className="validate_mark"> * </span> Email </label>
                    <Input placeholder="Email" name="email" type="email" onChange={this.onEmailChange} required />
                    <label> <span className="validate_mark"> * </span> Password </label>
                    <Input placeholder="Password" name="password" type="password" onChange={this.onPasswordChange} required />
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      Keep Me Logged In <span className="form-check-sign" />
                    </Label>
                    <Button block className="btn-round btn btn-danger btn-block">
                      Log In
                    </Button>
                  </Form>
                  <div className="signup text-center">
                    <Button
                      className="btn-link signupbtn"
                      href="/individual_signup"
                    >
                      NEW USER? BECOME A MEMBER.
                    </Button>
                  </div>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      color="info"                    
                      onClick={e => e.preventDefault()}
                    >
                      Forgot password?
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
}

export default LoginPage;
