
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter , Route, Switch, Redirect} from 'react-router-dom';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
// about us components
import Join from "views/about/Join.js";
import Objectives from "views/about/Objectives.js";
import Mission from "views/about/Mission.js";
import Goals from "views/about/Goals.js";
import Our_values from "views/about/Our_values.js";
import Expectations from "views/about/Expectations.js";
import Our_team from "views/about/Our_team.js";
// members components
import Architecture from "views/members/Architecture.js";
import Arts from "views/members/Arts.js";
import Building from "views/members/Building.js";
import Business from "views/members/Business.js";
import Community from "views/members/Community.js";
import Computer from "views/members/Computer.js";
import Construction from "views/members/Construction.js";
import Education from "views/members/Education.js";
import Farming from "views/members/Farming.js";
import Food from "views/members/Food.js";
import Healthcare from "views/members/Healthcare.js";
import Installation from "views/members/Installation.js";
import Legal from "views/members/Legal.js";
import Life from "views/members/Life.js";
import Management from "views/members/Management.js";
import Military from "views/members/Military.js";
import Office from "views/members/Office.js";
import Personal from "views/members/Personal.js";
import Production from "views/members/Production.js";
import Protective from "views/members/Protective.js";
import Sales from "views/members/Sales.js";
import Transportation from "views/members/Transportation.js";
import Students from "views/members/Students.js";
import Businesses from "views/members/Businesses.js";
import Other from "views/members/Other.js";
// become a member
import Individual_signup from "views/examples/Individual_signup.js";
import Businesses_signup from "views/examples/Businesses_signup.js";
// services
import Services from "views/services/Services.js";
import Skills_training from "views/services/Skills_training.js";
import Accounting_services from "views/services/Accounting_services.js";
import Economic_analysis from "views/services/Economic_analysis.js";
import Project from "views/services/Project.js";
import System from "views/services/System.js";
import Internships from "views/services/Internships.js";
import Human from "views/services/Human.js";
import Office_design from "views/services/Office_design.js";
import Professional from "views/services/Professional.js";
import Ms from "views/services/Ms.js";
import Basics from "views/services/Basics.js";
import Understanding from "views/services/Understanding.js";
import Applied from "views/services/Applied.js";
// current opportunities
import Current_opportunities from "views/current/Current_opportunities.js";
import Careers from "views/current/Careers.js";
// resources
import Publications from "views/resources/Publications.js";
import Marketing from "views/resources/Marketing.js";
import Networking from "views/resources/Networking.js";
import Articles from "views/resources/Articles.js";
import Blogs from "views/resources/Blogs.js";
import Events from "views/resources/Events.js";
import Videos from "views/resources/Videos.js";
import Archives from "views/resources/Archives.js";
// contact us
import Contactus from "views/contactus/Contactus.js";
// sign in
import Signin from "views/examples/Signin.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/index" render={props => <Index {...props} />} /> */}
      <Route path="/index" component={Index} />

      {/* About Us Routes definition */}
      <Route path="/join" component={Join} />
      <Route path="/objectives" component={Objectives} />
      <Route path="/mission" component={Mission} />
      <Route path="/goals" component={Goals} />
      <Route path="/our_values" component={Our_values} />
      <Route path="/expectations" component={Expectations} />
      <Route path="/our_team" component={Our_team} />

      {/* Members Routes definition */}
      <Route path="/architecture" component={Architecture} />
      <Route path="/arts" component={Arts} />
      <Route path="/building" component={Building} />
      <Route path="/business" component={Business} />
      <Route path="/community" component={Community} />
      <Route path="/computer" component={Computer} />
      <Route path="/construction" component={Construction} />
      <Route path="/education" component={Education} />
      <Route path="/farming" component={Farming} />
      <Route path="/food" component={Food} />
      <Route path="/healthcare" component={Healthcare} />
      <Route path="/installation" component={Installation} />
      <Route path="/legal" component={Legal} />
      <Route path="/life" component={Life} />
      <Route path="/management" component={Management} />
      <Route path="/military" component={Military} />
      <Route path="/office" component={Office} />
      <Route path="/personal" component={Personal} />
      <Route path="/production" component={Production} />
      <Route path="/protective" component={Protective} />
      <Route path="/sales" component={Sales} />
      <Route path="/transportation" component={Transportation} />
      <Route path="/students" component={Students} />
      <Route path="/businesses" component={Businesses} />
      <Route path="/other" component={Other} />

      {/* Services Routes definition */}
      <Route path="/services" component={Services} />
      <Route path="/skills_training" component={Skills_training} />
      <Route path="/accounting_services" component={Accounting_services} />
      <Route path="/economic_analysis" component={Economic_analysis} />
      <Route path="/project" component={Project} />
      <Route path="/system" component={System} />
      <Route path="/internships" component={Internships} />
      <Route path="/human" component={Human} />
      <Route path="/office_design" component={Office_design} />
      <Route path="/professional" component={Professional} />
      <Route path="/basics" component={Basics} />
      <Route path="/ms" component={Ms} />
      <Route path="/understanding" component={Understanding} />
      <Route path="/applied" component={Applied} />

      {/* Opportunities Routes definition */}
      <Route path="/current_opportunities" component={Current_opportunities} />
      <Route path="/careers" component={Careers} />

      {/* Resources Routes definition */}
      <Route path="/publications" component={Publications} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/networking" component={Networking} />
      <Route path="/articles" component={Articles} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/events" component={Events} />
      <Route path="/videos" component={Videos} />
      <Route path="/archives" component={Archives} />

      {/* Contact Us Routes definition */}
      <Route path="/contactus" component={Contactus} />

      {/* Sign In Routes definition */}
      <Route path="/signin" component={Signin} />

      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/userprofile"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/individual_signup"
        render={props => <Individual_signup {...props} />}
      />
      <Route
        path="/businesses_signup"
        render={props => <Businesses_signup {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
