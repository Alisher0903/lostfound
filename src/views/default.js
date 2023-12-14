// import { Container, Row } from "reactstrap";
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import CardsFooter from "components/Footers/CardsFooter.js";
// import Buttons from "./IndexSections/Buttons.js";
// import Inputs from "./IndexSections/Inputs.js";
// import CustomControls from "./IndexSections/CustomControls.js";
// import Menus from "./IndexSections/Menus.js";
// import Tabs from "./IndexSections/Tabs.js";
// import Progress from "./IndexSections/Progress.js";
// import Pagination from "./IndexSections/Pagination.js";
// import Pills from "./IndexSections/Pills.js";
// import Labels from "./IndexSections/Labels.js";
// import Alerts from "./IndexSections/Alerts.js";
// import Typography from "./IndexSections/Typography.js";
// import Modals from "./IndexSections/Modals.js";
// import Datepicker from "./IndexSections/Datepicker.js";
// import TooltipPopover from "./IndexSections/TooltipPopover.js";
// import Carousel from "./IndexSections/Carousel.js";
// import Icons from "./IndexSections/Icons.js";
// import Login from "./IndexSections/Login.js";
// import Download from "./IndexSections/Download.js";
// import Navbars from "./IndexSections/Navbars.js";
import React, { useEffect, useRef } from "react";
import Hero from "./IndexSections/Hero.js";
import Loginga from "components/Footers/Loginga.js";
import DefaultNav from "../components/Navbars/DefaultNav.js";

const Default = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <>
      <DefaultNav />
      <main ref={mainRef}>
        <Hero />
        {/* <Buttons />
        <Inputs />
        <section className="section">
          <Container>
            <CustomControls />
            <Menus />
          </Container>
        </section>
        <Navbars /> */}
        {/* <section className="section section-components">
          <Container>
            <Tabs />
            <Row className="row-grid justify-content-between align-items-center mt-lg">
              <Progress />
              <Pagination />
            </Row>
            <Row className="row-grid justify-content-between">
              <Pills />
              <Labels />
            </Row>
            <Alerts />
            <Modals />
            <Datepicker />
            <TooltipPopover />
            </Container>
          </section> */}
        {/* <Typography /> */}
        {/* <Carousel /> */}
        {/* <Icons />
        <Login />
        <Download /> */}
      </main>
      <Loginga />
    </>
  );
};

export default Default;
