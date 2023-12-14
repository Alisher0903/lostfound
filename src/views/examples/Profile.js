import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { api } from "components/api/api";
import { config } from "components/api/api";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { byId } from "components/api/api";

const Profile = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // eslint-disable-next-line
    // Bu satır eslint tarafından önerilen bir kontrol, bu durumda kullanmak istediğimiz özellikten dolayı es geçiyoruz
    // this.refs.main.scrollTop = 0;

    getMe();
    getCategory();
    getItems();
  }, []);

  const [items, setitems] = useState([]);
  const [category, setCategory] = useState([]);
  const [getMe1, setGetMe] = useState([]);
  const [lost, setlost] = useState([]);
  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  const openEditModal = () => setEditModal(!EditModal);
  const openDeleteModal = () => setDeleteModal(!DeleteModal);

  const editLostItem = () => {
    const editData = new FormData();
    editData.append("image", byId("file").files[0]);
    editData.append("name", byId("name").value);
    editData.append("description", byId("description").value);
    editData.append("contact_info", byId("contact_info").value);
    editData.append("type", "LOST");
    editData.append("latitude", 0);
    editData.append("longitude", 0);
    editData.append("category ", byId("category").value);
    editData.append("id", items.id);

    axios
      .put(api + "item" + items.id + "/", editData, {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        openEditModal();
        getItems();
        toast.success("Item muvaffaqiyatli taxrirlandi✔");
      })
      .catch(() => {
        toast.error("Item taxrirlashda xatolik yuz berdi!!!");
      });
  };

  // getCategory
  const getCategory = () => {
    let config = {
      headers: { Authorization: sessionStorage.getItem("jwtToken") },
    };
    axios
      .get(api + "category/", config)
      .then((res) => setCategory(res.data))
      .catch(() => console.log("category kelmadi!!!"));
  };

  const deleteLostItem = () => {
    axios
      .delete(api + "item" + items.id + "/", {
        headers: {
          Authorization: sessionStorage.getItem("jwtToken"),
        },
      })
      .then(() => {
        toast.success("Item o'chirildi!!!");
        openDeleteModal();
        getItems();
      })
      .catch(() => toast.error("Item o'chirishda xatolik yuz berdi!!!"));
  };

  function getMe() {
    axios
      .get(api + "current-user/", config)
      .then((res) => {
        setGetMe(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getItems() {
    axios
      .get(api + "items/", {
        headers: { Authorization: sessionStorage.getItem("jwtToken") },
      })
      .then((res) => {
        setitems(res.data);
      })
      .catch((err) => console.log(err));
  }

  const goAbout = () => byId("linkLost").click();

  return (
    <>
      <DemoNavbar />
      <ToastContainer />
      <Link to="/lost/about" id="linkLost"></Link>
      <main className="profile-page">
        <section className="section-profile-cover section-shaped my-0">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4"></div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
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
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo">
                        <img
                          alt="..."
                          className="rounded-circle"
                          src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small/user-profile-icon-free-vector.jpg"
                        />
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    {/* <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        size="sm"
                      >
                        Message
                      </Button>
                    </div> */}
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      {[
                        { heading: "22", description: "Friends" },
                        { heading: "10", description: "Photos" },
                        { heading: "89", description: "Comments" },
                      ].map((stat, index) => (
                        <div key={index}>
                          {/* <span className="heading">{stat.heading}</span>
                            <span className="description">{stat.description}</span> */}
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3 className="pt-5">{getMe1.username}</h3>
                  {/* <div className="h6 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Phone number:
                  </div> */}
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Phone number: {getMe1.phone_number}
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="row-grid">
                    {items &&
                      items.map((item, i) => (
                        <Col lg="4" className="mb-5" key={i}>
                          <Card className="card-lift--hover shadow border-0">
                            <CardBody className="pb-5">
                              <img
                                alt="..."
                                className="img-fluid "
                                src={item.image}
                                style={{
                                  width: "100%",
                                  height: "230px",
                                  objectFit: "cover",
                                }}
                              />
                              <h6 className="text-primary mt-4 text-uppercase">
                                {item.name}
                              </h6>
                              <Row>
                                <Col className="col-8">
                                  <Button
                                    onClick={() => {
                                      goAbout();
                                      sessionStorage.setItem(
                                        "lostAbout",
                                        item.id
                                      );
                                    }}
                                    className="mt-4"
                                    color="primary"
                                  >
                                    Learn more
                                  </Button>
                                </Col>
                                {/* <Col style={{ marginTop: "2rem" }}>
                                  <Link
                                    className="mr-3"
                                    onClick={() => {
                                      openEditModal();
                                      setitems(item);
                                    }}
                                  >
                                    <Icon icon="uiw:edit" width="23" />
                                  </Link>
                                  <Link
                                    onClick={() => {
                                      openDeleteModal();
                                      setitems(item);
                                    }}
                                  >
                                    <Icon
                                      icon="ic:baseline-delete"
                                      width="25"
                                    />
                                  </Link>
                                </Col> */}
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      <Modal isOpen={EditModal} centered size="lg">
        <ModalHeader
          toggle={openEditModal}
          className="text-dark fs-4 fw-bolder"
        >
          Edit Lost
        </ModalHeader>
        <ModalBody className="techer__modal-body">
          <Input type="file" className="form-control mb-3" id="file" />
          <Input
            id="name"
            className="mb-3"
            placeholder="Name"
            defaultValue={items && items.name}
          />
          <Input
            id="contact_info"
            className="mb-3"
            placeholder="Contact info"
            defaultValue={items && items.contact_info}
          />
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            defaultValue={items && items.description}
          />
          <select class="form-control mt-3" id="category">
            <option selected disabled>
              Category
            </option>
            {category &&
              category.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openEditModal}
          >
            Close
          </Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={editLostItem}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>

      {/* deleteModal */}
      <Modal isOpen={DeleteModal} centered size="lg">
        <ModalHeader
          toggle={openDeleteModal}
          className="text-dark fs-4 fw-bolder"
        >
          Delete item
        </ModalHeader>
        <ModalBody className="techer__modal-body">
          {items.name} ni o'chirishga ishonchingiz komilmi?
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openDeleteModal}
          >
            Close
          </Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={deleteLostItem}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
      <SimpleFooter />
    </>
  );
};

export default Profile;
