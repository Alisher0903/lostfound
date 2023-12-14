import { Container, Row } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Buttons from "views/IndexSections/Buttons.js";
import Inputs from "views/IndexSections/Inputs.js";
import CustomControls from "views/IndexSections/CustomControls.js";
import Menus from "views/IndexSections/Menus.js";
import Tabs from "views/IndexSections/Tabs.js";
import Progress from "views/IndexSections/Progress.js";
import Pagination from "views/IndexSections/Pagination.js";
import Pills from "views/IndexSections/Pills.js";
import Labels from "views/IndexSections/Labels.js";
import Alerts from "views/IndexSections/Alerts.js";
import Typography from "views/IndexSections/Typography.js";
import Modals from "views/IndexSections/Modals.js";
import Datepicker from "views/IndexSections/Datepicker.js";
import TooltipPopover from "views/IndexSections/TooltipPopover.js";
import Carousel from "views/IndexSections/Carousel.js";
import Icons from "views/IndexSections/Icons.js";
import Login from "views/IndexSections/Login.js";
import Download from "views/IndexSections/Download.js";
import Navbars from "views/IndexSections/Navbars.js";
import React, { useEffect, useRef } from "react";
import Hero from "views/IndexSections/Hero.js";
import Loginga from "components/Footers/Loginga.js";
import DefaultNav from "components/Navbars/DefaultNav";

const About = () => {
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
        <Buttons />
        <Inputs />
        <section className="section">
          <Container>
            <CustomControls />
            <Menus />
          </Container>
        </section>
        <Navbars />
        <section className="section section-components">
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
          </section>
        <Typography />
        <Carousel />
        <Icons />
        <Login />
        <Download />
      </main>
      <Loginga />
    </>
  );
};

export default About;
