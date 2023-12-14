import React, { useEffect, useState } from "react";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import { byId } from "../api/api";
import { Icon } from "@iconify/react";

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  // about page utish uchun
  const goAbout = () => byId("aboutBtn").click();
  const logOut = () => {
    byId("logout").click();
    sessionStorage.clear();
  }

  return (
    <>
      {/* about uchun link btn */}
      <Link id="aboutBtn" to="/profile"></Link>
      <Link id="logout" to="/"></Link>

      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main">
          <Container>
            <NavbarBrand className="mr-lg-5" href="/home" tag={NavLink} style={{ cursor: "pointer" }}>
              <img
                style={{ width: "100px", height: "50px" }}
                alt="..."
                src={require("assets/img/brand/lostfound.png")} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <NavLink to="/">
                      <img
                        style={{ width: "200px", height: "50px" }}
                        alt="..."
                        src={require("assets/img/brand/mobileNav.png")} />
                    </NavLink>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text" onClick={goAbout}>Profile</span>
                  </DropdownToggle>
                  {/* <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      about
                    </div>
                  </DropdownMenu> */}
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Category</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link to="/lost">
                      <DropdownItem tag={NavLink} style={{ color: "#748EF4" }}>
                        Lost
                      </DropdownItem>
                    </Link>
                    <Link to="/found">
                      <DropdownItem tag={NavLink} style={{ color: "#748EF4" }}>
                        Found
                      </DropdownItem>
                    </Link>
                    {/* <DropdownItem tag={NavLink}>
                      <Link to="/login-page">
                        Login
                      </Link>
                    </DropdownItem>
                    <DropdownItem tag={NavLink}>
                      <Link to="/register-page">
                        Register
                      </Link>
                    </DropdownItem> */}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://t.me/itcity_academy"
                    id="tooltip333589074"
                    target="_blank">
                    <i className="fa fa-telegram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Telegram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Follow us on Telegram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/itcity_academy"
                    id="tooltip356693867"
                    target="_blank">
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/creativetim"
                    id="tooltip184698705"
                    target="_blank">
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://github.com/Alisher0903"
                    id="tooltip112445449"
                    target="_blank">
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip112445449">
                    Star us on Github
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-lg-block ml-lg-3">
                  <Button
                    onClick={logOut}
                    className="btn-neutral btn-icon"
                    color="default">
                    <span className="btn-inner--icon">
                      <Icon icon="basil:logout-outline" rotate={2} width="20" />
                    </span>
                    <span className="nav-link-inner--text ml-2">
                      Log out
                    </span>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
