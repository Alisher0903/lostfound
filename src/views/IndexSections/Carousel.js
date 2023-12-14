import axios from "axios";
import { api } from "../../components/api/api";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { toast } from "react-toastify";

const Carousel = () => {
  const [lostAbout, setLostAbout] = useState([]);

  useEffect(() => {
    getLostAbout();
  }, []);

  // get lost about
  const getLostAbout = () => {
    let lostAboutId = sessionStorage.getItem("lostAbout");
    let config = {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    }
    axios.get(api + "item/", config)
      .then(res => {
        setLostAbout(res.data.find(i => i.id == lostAboutId))
      })
      .catch(() => toast.warning("Ma'lumot kelishda kechikish yuz berdi!!!"))
  }

  return (
    <>
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
                  {lostAbout.name}
                </span>
                <small style={{ fontSize: ".8rem" }}>
                  <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Added time:</span>
                  {lostAbout.date}
                </small>
                <span style={{ fontSize: ".9rem" }}>
                  <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Contact information:</span>
                  {lostAbout.contact_info}
                </span>
              </h1>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                <img
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                  src={lostAbout.image} alt="img" />
              </div>
            </Col>
          </Row>
          <p className="lead text-white" style={{marginTop: "5rem"}}>
            <span style={{ fontWeight: "bold", marginRight: ".5rem" }}>Description:</span>
            {lostAbout.description}
          </p>
        </Container>
      </section>
    </>
  );
};

export default Carousel;
