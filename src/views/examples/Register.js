import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import SignUpNav from "components/Navbars/SignNav";
import { Icon } from "@iconify/react";
import "./register.scss";
import { api, byId } from "../../components/api/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {

  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  const createAccount = () => {
    let addData = {
      phone_number: `+998${byId("phoneNumber").value}`,
      username: byId("name").value,
      password: byId("password").value
    }
    sessionStorage.setItem("phoneNumbar", addData.phone_number);
    axios.post(api + "register/", addData)
      .then(res => {
        if (res.data.message) {
          toast.success(`${addData.phone_number} raqamiga tasdiqlash kodi yuborildi. Iltimos kodni kiriting.`);
          byId("goCodePage").click();
        } else toast.error(`${addData.phone_number} bu raqamdan oldin foydalanilgan bulishi mumkin, ma'lumotlarni tekshirib qaytadan urinib ko'ring!!!`)
      })
      .catch(() => {
        toast.error(`Bu raqamdan oldin foydalanilgan bulishi mumkin, ma'lumotlarni tekshirib qaytadan urinib ko'ring!!!`);
      })
  }

  return (
    <>
    <ToastContainer />
      <Link to="/code" id="goCodePage"></Link>
      <SignUpNav />
      <main ref={mainRef}>
        <section className="section section-shaped section-lg" style={{ minHeight: "100vh" }}>
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-6 pt-lg-5 pb-lg-2">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  {/* <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign up</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon mr-4"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/github.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={
                                require("assets/img/icons/common/google.svg")
                                  .default
                              }
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader> */}
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-5">
                      <p
                        style={{
                          fontSize: "1.7rem",
                          fontWeight: "700",
                          letterSpacing: "1px",
                          color: "#2DCE89"
                        }}>Sign Up</p>
                    </div>
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <Icon icon="bxs:user" width="20" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="name"
                            className="input_style"
                            placeholder="Name" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <Icon icon="gridicons:phone" width="20" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <InputGroupText
                            style={{
                              paddingLeft: "0",
                              paddingRight: ".3rem"
                            }}>
                            +998
                          </InputGroupText>
                          <Input
                            id="phoneNumber"
                            className="input_style"
                            placeholder="Phone Number"
                            type="number" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <Icon icon="mdi:password-outline" width="20" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="password"
                            className="input_style"
                            placeholder="Password"
                            type="password"
                            autoComplete="off" />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox" />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister">
                              <span>
                                Eslab qolish{" "}
                                {/* <Link
                                    to="#"
                                    onClick={(e) => e.preventDefault()}>
                                    Privacy Policy
                                  </Link> */}
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          onClick={createAccount}
                          className="mt-4"
                          color="primary"
                          type="button">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      {/* <SimpleFooter /> */}
    </>
  );
}

export default Register;
