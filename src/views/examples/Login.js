import React, { useEffect, useRef } from "react";
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
import LogNav from "components/Navbars/LogNav";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { api, byId } from "../../components/api/api";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  // login
  const addLogin = () => {
    let addData = {
      phone_number: `+998${byId("phoneNumber").value}`,
      password: byId("password").value
    }
    axios.post(api + "login/", addData)
      .then(res => {
        toast.success("Tizimga muvaffaqiyatli kiridingiz✔");
        sessionStorage.setItem("jwtToken", `Bearer ${res.data.access_token}`);
        sessionStorage.setItem("logOutToken", `Bearer ${res.data.refresh_token}`);
        byId("goHomePage").click();
      })
      .catch(() => {
        toast.error("Xatolik yuz berdi ma'lumotlarni tekshirib qaytadan urinib ko'ring❓");
        disNone();
      })
  }

  // small yozuviga qarashli
  const disNone = () => byId("dNonef").style.display = "inline";

  // forgetPassword
  const forgotPassword = () => {
    byId("loginBtn").style.display = "none";
    byId("confirmPassword").style.display = "inline";
    byId("confirmBtn").style.display = "inline"
  }

  // passwordCode
  const passwordCode = () => {
    byId("phone_number").style.display = "none";
    byId("passwordOne").style.display = "none";
    byId("confirmPassword").style.display = "none";
    byId("confirmBtn").style.display = "none";
    byId("verificationCode").style.display = "inline";
    byId("confirmCodeBtn").style.display = "inline";
  }

  // confirmCode
  const confirmCode = () => {
    sessionStorage.setItem("phone_number", `+998${byId("phoneNumber").value}`);
    sessionStorage.setItem("new_password", byId("password").value);
    sessionStorage.setItem("confirm_password", byId("confirm_password").value);

    axios.post(api + "forgot-password/", {
      phone_number: sessionStorage.getItem("phone_number")
    })
      .then(() => {
        toast.success(`${sessionStorage.getItem("phone_number")} raqamiga tasdiqlash kodi yuborildi. Kodni kiriting.`);
      })
      .catch(() => {
        toast.error("Ma'lumotlarni xato to'ldirdingiz!!!");
      })
  }

  // enterCode
  const enterCode = () => {
    const addEnterCode = {
      phone_number: sessionStorage.getItem("phone_number"),
      new_password: sessionStorage.getItem("new_password"),
      confirm_password: sessionStorage.getItem("confirm_password"),
      verification_code: byId("verification_code").value
    }
    axios.post(api + "veriy-forgot-password/", addEnterCode)
      .then(() => {
        toast.success("Parolingiz muvaffaqiyatli o'zgartirildi✔");
        backLoginPage();
      })
      .catch(() => {
        toast.error("Nimadur xato ketdi. Qaytadan tekshirib ko'ring!!!");
      })
  }

  // back login page
  const backLoginPage = () => {
    byId("phone_number").style.display = "inline";
    byId("passwordOne").style.display = "inline";
    byId("loginBtn").style.display = "inline";
    byId("verificationCode").style.display = "none";
    byId("confirmCodeBtn").style.display = "none";
  }

  return (
    <>
      <ToastContainer />
      <Link to="/home" id="goHomePage"></Link>
      <LogNav />
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
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-5">
                      <p
                        style={{
                          fontSize: "1.7rem",
                          fontWeight: "700",
                          letterSpacing: "1px",
                          color: "#2DCE89"
                        }}>Sign In</p>
                      <small id="dNonef" style={{ display: "none" }}>Ro'yxatdan utganligingizni tekshirib ko'ring!!!</small>
                    </div>
                    <Form role="form">
                      <FormGroup id="phone_number">
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
                      <FormGroup id="passwordOne">
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
                            type="password" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup id="confirmPassword" style={{ display: "none" }}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <Icon icon="mdi:password-outline" width="20" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="confirm_password"
                            className="input_style"
                            placeholder="confirm password"
                            type="password" />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup id="verificationCode" style={{ display: "none" }}>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <Icon icon="mdi:password-outline" width="20" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="verification_code"
                            className="input_style"
                            placeholder="verification code" />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col className="text-left" xs="6">
                          <Link
                            className="text-light"
                            to="/register-page">
                            <small>Create new account</small>
                          </Link>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link
                            onClick={forgotPassword}
                            className="text-light">
                            <small>Forgot password?</small>
                          </Link>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          id="loginBtn"
                          onClick={addLogin}
                          className="mt-4"
                          color="primary"
                          type="button">
                          Log In
                        </Button>
                        <Button
                          onClick={() => {
                            passwordCode();
                            confirmCode();
                          }}
                          id="confirmBtn"
                          style={{ display: "none" }}
                          className="mt-4"
                          color="primary"
                          type="button">
                          Confirm
                        </Button>
                        <Button
                          onClick={enterCode}
                          id="confirmCodeBtn"
                          style={{ display: "none" }}
                          className="mt-4"
                          color="primary"
                          type="button">
                          Confirm Code
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
    </>
  );
}

export default Login;
