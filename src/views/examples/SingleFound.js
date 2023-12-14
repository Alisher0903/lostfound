import React, { useEffect, useRef } from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CarouselFound from "../IndexSections/CarouselFound";

const SingleFound = () => {
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
        <CarouselFound />
      </main>
      <SimpleFooter />
    </>
  );
};

export default SingleFound;
