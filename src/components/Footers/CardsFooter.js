import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const CardsFooter = () => {
  return (
    <>
      <footer className="footer has-cards">
        <Container className="container-lg">
          <Row style={{
            display: "flex",
            justifyContent: "center",
          }}>
            <Col className="mb-5 mb-md-0" md="5">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/lost">
                  <CardImg
                    className="p-5"
                    alt="..."
                    src={require("assets/img/theme/landing.png")} />
                </Link>
              </Card>
              <h2 className=" text-danger text-center font-weight-bold mt-3">LOST</h2>
            </Col>
            <Col className="mb-5 mb-lg-0" md="5">
              <Card className="card-lift--hover shadow border-0">
                <Link to="/found">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/profile.png")} />
                </Link>
              </Card>
              <h2 className=" text-success text-center font-weight-bold mt-3">FOUND</h2>
            </Col>
          </Row>
        </Container>
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
                target="_blank"
              >
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
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
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
              <Nav className="nav-footer justify-content-lg-end">
                <NavItem>
                  <NavLink className="pl-0">
                    <Link
                      to="https://itca.uz/"
                      target="_blank">
                      It City Academy
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/lost">
                      Lost
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/found">
                      Found
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="/profile">
                      Profile
                    </Link>
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

export default CardsFooter;
