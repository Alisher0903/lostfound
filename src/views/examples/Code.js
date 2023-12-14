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
import SignUpNav from "components/Navbars/SignNav";
import { Icon } from "@iconify/react";
import "./register.scss";
import { Link } from "react-router-dom";
import { api, byId } from "../../components/api/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Code = () => {

    const mainRef = useRef(null);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        if (mainRef.current) {
            mainRef.current.scrollTop = 0;
        }
    }, []);

    // phone number
    const phoneNumbar = sessionStorage.getItem("phoneNumbar");

    // addRegister
    const addRegister = () => {
        let addData = {
            phone_number: phoneNumbar,
            verification_code: byId("verification_code").value
        }
        axios.post(api + "register-verify/", addData)
            .then(res => {
                toast.success(`${res.data.message}.`);
                byId("loginPage").click();
            })
            .catch(() => {
                toast.error(`Kodni xato kiritdingiz. Tekshirib qaytadan urinib ko'ring!`)
            })
    }

    // back
    const backToBack = () => byId("backTo").click();

    return (
        <>
            <ToastContainer />
            <Link to="/register-page" id="backTo"></Link>
            <Link to="/login-page" id="loginPage"></Link>
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
                    <Container className="pt-6 pt-lg-7 pb-lg-2">
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
                                                }}>Sign Up</p>
                                            <small>
                                                <span style={{ fontWeight: "bold" }}>
                                                    {phoneNumbar}
                                                </span>
                                                raqamiga tasdiqlash kodi yuborildi. Kodni kiriting...
                                            </small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <Icon icon="gridicons:phone" width="20" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        defaultValue={phoneNumbar}
                                                        id="phoneNumber"
                                                        className="input_style"
                                                        placeholder="Phone Number" />
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
                                                        id="verification_code"
                                                        className="input_style"
                                                        placeholder="Enter Code" />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-center">
                                                <p>Kodni qayta
                                                    <Link
                                                        style={{
                                                            fontWeight: "bold"
                                                        }}> yuborish </Link>
                                                </p>
                                                <Button
                                                    onClick={backToBack}
                                                    style={{ padding: "3.3px 15px", marginRight: "1rem" }}
                                                    className="mt-2"
                                                    color="primary"
                                                    type="button">
                                                    <Icon icon="noto-v1:back-arrow" width="35" />
                                                </Button>
                                                <Button
                                                    onClick={addRegister}
                                                    className="mt-2"
                                                    color="primary"
                                                    type="button">
                                                    confirm
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

export default Code;
