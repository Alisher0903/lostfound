import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Hero2 = () => {
  useEffect(() => {
    // Biron bir side effect uchun kerak bo'lsa shu yerga yozing
    // Masalan, component yuklanganda qandaydir bir narsa bajarmoqchi bo'lsangiz
  }, []);

  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            {/* Boshqa spans... */}
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center g-5">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/landing.jpg")}
                  />

                  {/* <div className="btn-wrapper ">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >

                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-cloud-download-95" />
                      </span>
                      <span className="btn-inner--text">Download React</span>
                    </Button>{" "}
                    {/* Boshqa Button... */}
                  {/* </div>
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">
                      *proudly coded by
                    </small>
                    <img
                      alt="..."
                      className="ml-1"
                      style={{ height: "28px" }}
                      src={require("assets/img/brand/creativetim-white-slim.png")}
                    />
                  </div> */}
                </Col>
                <Col className="text-center px-5" lg="6">
                  <p className="lead text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis fugit deleniti? Excepturi quaerat dolor quas dolores nulla dolorum voluptas, eius, magnam impedit obcaecati nisi, doloribus non accusantium eaque quia.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero2;
