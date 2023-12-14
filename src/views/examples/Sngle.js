import React, { useEffect, useRef } from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Carousel from "../IndexSections/Carousel.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
// import { Container, Row } from "reactstrap";
// import CardsFooter from "components/Footers/CardsFooter.js";
// import Hero from "views/IndexSections/Hero.js";
// import Buttons from "views/IndexSections/Buttons.js";
// import Menus from "views/IndexSections/Menus.js";
// import Tabs from "views/IndexSections/Tabs.js";
// import Progress from "views/IndexSections/Progress.js";
// import Pills from "views/IndexSections/Pills.js";
// import Typography from "views/IndexSections/Typography.js";
// import Datepicker from "views/IndexSections/Datepicker.js";
// import TooltipPopover from "views/IndexSections/TooltipPopover.js";
// import Icons from "views/IndexSections/Icons.js";
// import Login from "./Login.js";
// import Download from "views/IndexSections/Download.js";
// import CustomControls from "views/IndexSections/CustomControls.js";

const Single = () => {
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
      <DemoNavbar />
      <main ref={mainRef}>
        <Carousel />
      </main>
      <SimpleFooter />
    </>
  );
};

export default Single;
