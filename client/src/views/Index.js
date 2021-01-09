import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import Services from "views/index-sections/Services";
import Services_skills from 'views/index-sections/Services_skills';
import Contact from "views/index-sections/Contact.js";
import BecomeaMember from "views/index-sections/BecomeaMember.js";
import Social from "views/index-sections/Social.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <Services />
        <Services_skills />
        <Contact />
        <BecomeaMember />
        <Social />
        {/* <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
