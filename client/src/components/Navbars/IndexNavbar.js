import React , {Component} from "react";
import axios from "axios"; 

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
} from "reactstrap";
var logedin;
class IndexNavbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    axios.post('users/logout')
    .then(function(result){
      if(result.data.message === 'success'){
        window.location.href="/signin";
      }
    })
  }

componentDidMount() {
  var sessionresult;
  
  axios.post("http://localhost:5000/users/getsession")
  .then(function(res){
    sessionresult = res.data.sessionData;
    console.log("======= session =========**")
    console.log(sessionresult)
    if(sessionresult.id){
      console.log("========= navbar session ========")
      // this.setState({
      logedin= sessionresult.id;
      // })
      console.log(sessionresult.id)
      console.log(logedin)
    }else{
      console.log("no")
    }
  })
  .catch(err => console.log(err));
}
 
render(){
  return (
    <div className="section-navbars">
      <div id="menu-dropdown">
        <div className="container-fluid">
            <Navbar className="bg-black" expand="lg">
              <NavbarBrand>
                <img href="/index" width="65px" height="70px" alt="logo" src={require("assets/img/logo.png")} />
              </NavbarBrand>
              <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
                data-target="#navbar_menu_icon"
                data-toggle="collapse"
                id="navbar_menu_icon"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_menu_icon">
                <Nav className="ml-auto" navbar>                  
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      nav
                      role="button"
                    >
                      <p> About Us </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem className="about_drop" href="/join"> Why join SSPWF? </DropdownItem>
                      <DropdownItem className="about_drop" href="/objectives"> Objectives </DropdownItem>
                      <DropdownItem className="about_drop" href="/mission"> Mission </DropdownItem>
                      <DropdownItem className="about_drop" href="/goals"> Goals </DropdownItem>
                      <DropdownItem className="about_drop" href="/our_values"> Our values </DropdownItem>
                      <DropdownItem className="about_drop" href="/expectations"> Expectations </DropdownItem>
                      <DropdownItem className="about_drop" href="/our_team"> Our Team </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      href="#pablo"
                      nav
                      role="button"
                    >
                      <p> Members </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem href="/architecture"> Architecture and Engineering </DropdownItem>
                      <DropdownItem href="/arts"> Arts, Design, Entertaining, Sports, and Media </DropdownItem>
                      <DropdownItem href="/building"> Building, Grounds Cleaning and Maintenance </DropdownItem>
                      <DropdownItem href="/business"> Business and Financial Operations </DropdownItem>
                      <DropdownItem href="/community"> Community and Social services </DropdownItem>
                      <DropdownItem href="/computer">Computer and Mathematics </DropdownItem>
                      <DropdownItem href="/construction"> Construction and Extraction </DropdownItem>
                      <DropdownItem href="/education"> Education, training, and Library </DropdownItem>
                      <DropdownItem href="/farming"> Farming, Fishing, and Forestry </DropdownItem>
                      <DropdownItem href="/food"> Food Preparation and Serving </DropdownItem>
                      <DropdownItem href="/healthcare"> Healthcare Practitioners and Support (Medical) </DropdownItem>
                      <DropdownItem href="/installation"> Installation, Maintenance, and Repair </DropdownItem>
                      <DropdownItem href="/legal"> Legal </DropdownItem>
                      <DropdownItem href="/life"> Life, Physical, and Social Sciences </DropdownItem>
                      <DropdownItem href="/management"> Management </DropdownItem>
                      <DropdownItem href="/military"> Military </DropdownItem>
                      <DropdownItem href="/office"> Office and Administration Support </DropdownItem>
                      <DropdownItem href="/personal"> Personal Care and Services </DropdownItem>
                      <DropdownItem href="/production"> Production (e.g. assemblers) </DropdownItem>
                      <DropdownItem href="/protective"> Protective Services (e.g. police, intelligence) </DropdownItem>
                      <DropdownItem href="/sales"> Sales and Related Occupations (insurance, vendors, advertising etc.) </DropdownItem>
                      <DropdownItem href="/transportation"> Transportation and Materials Moving </DropdownItem>
                      <DropdownItem href="/students"> Students </DropdownItem>
                      <DropdownItem href="/businesses"> Businesses </DropdownItem>
                      <DropdownItem href="/other"> Other </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      nav
                      role="button"
                    >
                      <p> Become a Member </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem href="/individual_signup"> Individuals </DropdownItem>
                      <DropdownItem href="/businesses_signup"> Businesses </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      nav
                      role="button"
                    >
                      <p> Services </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem className="menu_title" href="/accounting_services"> Services </DropdownItem>
                      <DropdownItem className="serviceitems" href="/accounting_services"> Accounting Services </DropdownItem>
                      <DropdownItem className="serviceitems" href="/economic_analysis"> Economic analysis </DropdownItem>
                      <DropdownItem className="serviceitems" href="/project"> Project Design and Evaluation  </DropdownItem>
                      <DropdownItem className="serviceitems" href="/system"> System Development </DropdownItem>
                      <DropdownItem className="serviceitems" href="/internships"> Internships: New graduates </DropdownItem>
                      <DropdownItem className="serviceitems" href="/human"> Human Resources Services </DropdownItem>
                      <DropdownItem className="serviceitems" href="/office_design"> Office Design,Setup, Organization </DropdownItem>
                      <DropdownItem className="serviceitems" href="/professional"> Professional Work Adventure</DropdownItem>
                      
                      <DropdownItem className="menu_title" href="/basics"> Skills Training </DropdownItem>
                      <DropdownItem className="serviceitems" href="/basics"> Basics </DropdownItem>
                      <DropdownItem className="serviceitems" href="/ms"> MS Office </DropdownItem>
                      <DropdownItem className="serviceitems" href="/understanding"> Understanding Business Fundamentals  </DropdownItem>
                      <DropdownItem className="serviceitems" href="/applied"> Applied Basic Economic Concepts or Theories </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      nav
                      role="button"
                    >
                      <p> Opportunities </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem href="/current_opportunities"> Current Opportunities </DropdownItem>
                      <DropdownItem href="/careers"> Careers </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      nav
                      role="button"
                    >
                      <p> Resources </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem href="/publications"> Publications </DropdownItem>
                      <DropdownItem href="/marketing"> Marketing </DropdownItem>
                      <DropdownItem href="/networking"> Networking </DropdownItem>
                      <DropdownItem href="/articles"> Articles </DropdownItem>
                      <DropdownItem href="/blogs"> Blogs </DropdownItem>
                      <DropdownItem href="/events"> Events/Job Fair </DropdownItem>
                      <DropdownItem href="/videos"> Videos </DropdownItem>
                      <DropdownItem href="/archives"> Archives </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                    {
                      logedin?<a href='/#' onClick={this.logout} className="menulist">logout</a>:<a href="signin" className="menulist">signin</a>
                    }
                    <a href={logedin?"/userprofile":"/"} className={logedin?"menulist":"hidden"}>
                      {logedin?"my profile":null}  
                    </a>
                    <a href="/contactus" className="menulist"> Contact Us </a>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle
                      aria-expanded={false}
                      aria-haspopup={true}
                      caret
                      color="default"
                      data-toggle="dropdown"
                      href=""
                      nav
                      role="button"
                    >
                      <p> LINK </p>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger" right>
                      <DropdownItem href="https://www.linkedin.com/" target="_blank"> <i className="fa fa-linkedin"/> LinkedIn  </DropdownItem>
                      <DropdownItem href="https://www.youtube.com/" target="_blank"> <i className="fa fa-youtube" /> YouTube </DropdownItem>
                      <DropdownItem href="https://twitter.com/explore" target="_blank"> <i className="fa fa-twitter" /> Twitter </DropdownItem>
                      <DropdownItem href="https://www.facebook.com/" target="_blank"> <i className="fa fa-facebook" /> Facebook </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </UncontrolledCollapse>
            </Navbar>
        </div>
      </div>
    </div>
  );
}
  
}

export default IndexNavbar;
