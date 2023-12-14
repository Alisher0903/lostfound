import axios from "axios";
import { api } from "../../components/api/api";
import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

const Carousel = () => {
    const [foundAbout, setFoundAbout] = useState([]);

    useEffect(() => {
        getFoundAbout();
    }, []);

    // get found about
    const getFoundAbout = () => {
        let foundAboutId = sessionStorage.getItem("foundAbout");
        axios.get(api + "item/", {
            headers: { Authorization: sessionStorage.getItem('jwtToken') }
        })
            .then(res => {
                setFoundAbout(res.data.find(i => i.id == foundAboutId))
            })
            .catch(() => toast.warning("Ma'lumot kelishda kechikish yuz berdi!!!"))
    }

    return (
        <>
            <ToastContainer />
            <section className="section section-shaped pt-5">
                <div className="shape shape-style-1 shape-default ">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className="py-lg">
                    <Row className="justify-content-between align-items-center ">
                        <Col className="mb-5 mb-lg-0" lg="5">
                            <h1
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                                className="text-white font-weight-light">
                                <span>
                                    <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Name:</span>
                                    {foundAbout.name}
                                </span>
                                <small style={{ fontSize: ".8rem" }}>
                                    <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Added time:</span>
                                    {foundAbout.date}
                                </small>
                                <span style={{ fontSize: ".9rem" }}>
                                    <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Contact information:</span>
                                    {foundAbout.contact_info}
                                </span>
                            </h1>
                        </Col>
                        <Col className="mb-lg-auto" lg="6">
                            <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                                <img
                                    className="img-fluid"
                                    style={{ objectFit: "cover" }}
                                    src={foundAbout.image} alt="img" />
                            </div>
                        </Col>
                    </Row>
                    <p className="lead text-white" style={{marginTop: "5rem"}}>
                        <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Description:</span>
                        {foundAbout.description}
                    </p>
                </Container>
            </section>
        </>
    );
};

export default Carousel;
