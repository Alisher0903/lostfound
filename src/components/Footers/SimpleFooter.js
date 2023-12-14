import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SimpleFooter = () => {
  return (
    <>
      <footer className=" footer">
        <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Subscribe to our social networks
              </h3>
              {/* <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4> */}
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://t.me/itcity_academy"
                id="tooltip475038074"
                target="_blank">
                <span className="btn-inner--icon">
                  <i className="fa fa-telegram" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Telegram
              </UncontrolledTooltip>
              {/* <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href=""
                id="tooltip837440414"
                target="_blank">
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Like us
              </UncontrolledTooltip> */}
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="instagram"
                href="https://www.instagram.com/itcity_academy/"
                id="tooltip829810202"
                target="_blank">
                <span className="btn-inner--icon">
                  <i className="fa fa-instagram" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Follow us Instagram
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="github"
                href="https://github.com/Alisher0903"
                id="tooltip495507257"
                target="_blank">
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip495507257">
                Follow us Github
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://itca.uz/"
                  target="_blank">
                  It City Academy
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="https://itca.uz/"
                    target="_blank">
                    It City Academy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank">
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default SimpleFooter;
