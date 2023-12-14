import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";
import axios from "axios";
import { api, byId } from "../../components/api/api";
import { ToastContainer, toast } from "react-toastify";
import { Icon } from "@iconify/react";
// import CardsFooter from "components/Footers/CardsFooter.js";
// import Download from "../IndexSections/Download.js";

const Lost = () => {

  const [lost, setLost] = useState([]);
  const [category, setCategory] = useState([]);
  const [lostId, setLostId] = useState([]);
  const [AddModal, setAddModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  const openAddModal = () => setAddModal(!AddModal);
  const openEditModal = () => setEditModal(!EditModal);
  const openDeleteModal = () => setDeleteModal(!DeleteModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getLost();
    getCategory();
  }, []);

  // getlost
  const getLost = () => {
    let config = {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    }
    axios.get(api + "item/", config)
      .then(res => {
        setLost(res.data.reverse().filter(t => t.type == "LOST"))
      })
      .catch(() => console.log("Lost kelmadi!!!"))
  }

  // getCategory
  const getCategory = () => {
    let config = {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    }
    axios.get(api + "category/", config)
      .then(res => setCategory(res.data))
      .catch(() => console.log("category kelmadi!!!"))
  }

  // addLostItem
  const addLostItem = () => {
    const addData = new FormData();
    addData.append("image", byId("file").files[0]);
    addData.append("name", byId("name").value);
    addData.append("description", byId("description").value);
    addData.append("contact_info", byId("contact_info").value);
    addData.append("type", "LOST");
    addData.append("latitude", 0);
    addData.append("longitude", 0);
    addData.append("category ", byId("category").value);

    axios.post(api + "item/", addData, {
      headers: {
        Authorization: sessionStorage.getItem('jwtToken'),
      },
    })
      .then(() => {
        openAddModal();
        getLost();
        toast.success("Lost item muvaffaqiyatli qo'shildi✔")
      })
      .catch(() => {
        toast.error("Lost item qo'shishda xatolik yuz berdi!!!")
      })
  }

  // editLostItem
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
    editData.append("id", lostId.id);

    axios.put(api + "item" + lostId.id + "/", editData, {
      headers: {
        Authorization: sessionStorage.getItem('jwtToken'),
      },
    })
      .then(() => {
        openEditModal();
        getLost();
        toast.success("Lost item muvaffaqiyatli taxrirlandi✔")
      })
      .catch(() => {
        toast.error("Lost item taxrirlashda xatolik yuz berdi!!!")
      })
  }

  // deleteLostItem
  const deleteLostItem = () => {
    axios.delete(api + "item" + lostId.id + "/", {
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
      },
    })
      .then(() => {
        toast.success("Lost item o'chirildi!!!");
        openDeleteModal();
        getLost();
      })
      .catch(() => toast.error("Lost item o'chirishda xatolik yuz berdi!!!"))
  }

  // search
  const searchLost = () => {
    let searchItem = byId("search").value
    if (!!searchItem) axios.get(api + "item/?search=" + searchItem, {
      headers: { Authorization: sessionStorage.getItem("jwtToken") }
    }).then(res => setLost(res.data.reverse().filter(t => t.type == "LOST")))
    else getLost();
  }

  // category filter
  const categoryFIlter = () => {
    let categoryId = byId("categoryFilter").value
    axios.get(api + "item/category/" + categoryId + "/", {
      headers: { Authorization: sessionStorage.getItem("jwtToken") }
    })
      .then(res => setLost(res.data.reverse().filter(c => c.type == "LOST")))
      .catch(() => console.log("category filter ishlamadi!!!"))
  }

  // my lost filter
  const myLostFilter = () => {
    axios.get(api + "items/", {
      headers: { Authorization: sessionStorage.getItem("jwtToken") }
    })
      .then(res => setLost(res.data.reverse().filter(i => i.type == "LOST")))
      .catch(() => console.log("my items kelamdi!!!"))
  }

  // go about
  const goAbout = () => byId("linkLost").click();

  return (
    <>
      <Link to="/lost/about" id="linkLost"></Link>
      <ToastContainer />
      <DemoNavbar />
      <main>
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      A beautiful Design System{" "}
                      <span>completed with examples</span>
                    </h1>
                    <p className="lead text-white">
                      The design system comes with four pre-built pages to
                      help you get started faster. You can change the text and
                      images and you're good to go.
                    </p>
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                      className="btn-wrapper">
                      <Button
                        onClick={openAddModal}
                        className="btn-icon mb-3 mb-sm-0"
                        color="info">
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-plus" />
                        </span>
                        <span className="btn-inner--text">Add Item</span>
                      </Button>
                      <Input
                        id="search"
                        onChange={searchLost}
                        style={{ width: "50%" }}
                        placeholder="🔍 search" />
                    </div>
                  </Col>
                  <Col className="text-center" lg="6">
                    <img className="py-4 mt-5 mt-lg-0" style={{ objectFit: "cover", height: "400px" }} src={require("assets/img/theme/landing.png")} alt="" />
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0">
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "3rem",
                    marginBottom: "3rem"
                  }}>
                  <Button
                    onClick={() => {
                      getLost();
                      byId("categoryFilter").value = "Category filter"
                    }}
                    className="btn-neutral btn-icon py-1"
                    color="default"
                    size="sm">
                    All
                  </Button>
                  <Button
                    onClick={() => {
                      myLostFilter();
                      byId("categoryFilter").value = "Category filter"
                    }}
                    className="btn-neutral btn-icon py-1"
                    color="default"
                    size="sm">
                    My Lost
                  </Button>
                  <select
                    id="categoryFilter"
                    onChange={categoryFIlter}
                    className="w-25 form-control form-control-sm">
                    <option selected disabled>Category filter</option>
                    {category && category.map((item, i) =>
                      <option key={i} value={item.id}>{item.name}</option>
                    )}
                  </select>
                </div>
                <Row className="row-grid">
                  {lost && lost.map((item, i) =>
                    <Col lg="4" className="mb-5" key={i}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="pb-5">
                          <img
                            alt="..."
                            className="img-fluid "
                            src={item.image}
                            style={{ width: "100%", height: "230px", objectFit: "cover" }} />
                          <h6 className="text-primary mt-4 text-uppercase">
                            {item.name}
                          </h6>
                          <Row>
                            <Col className="col-8">
                              <Button
                                onClick={() => {
                                  goAbout();
                                  sessionStorage.setItem("lostAbout", item.id);
                                }}
                                className="mt-4"
                                color="primary">
                                Learn more
                              </Button>
                            </Col>
                            <Col style={{ marginTop: "2rem" }}>
                              {/* <Link className="mr-3" onClick={() => {
                                openEditModal();
                                setLostId(item);
                              }}>
                                <Icon icon="uiw:edit" width="23" />
                              </Link>
                              <Link onClick={() => {
                                openDeleteModal();
                                setLostId(item)
                              }}>
                                <Icon icon="ic:baseline-delete" width="25" />
                              </Link> */}
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />

      {/* addLostModal */}
      <Modal isOpen={AddModal} centered size="lg">
        <ModalHeader
          toggle={openAddModal}
          className="text-dark fs-4 fw-bolder">Add Lost</ModalHeader>
        <ModalBody>
          <Input type="file" className="form-control mb-3" id="file" />
          <Input className="mb-3" id="name" placeholder="Name" />
          <Input className="mb-3" id="description" placeholder="Description" />
          <textarea className="form-control" id="contact_info" placeholder="Contact info" />
          <select class="form-control mt-3" id="category">
            <option selected disabled>Category</option>
            {category && category.map((item, i) =>
              <option key={i} value={item.id}>{item.name}</option>
            )}
          </select>
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openAddModal}>Close</Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={addLostItem}>Save</Button>
        </ModalFooter>
      </Modal >

      {/* edit modal */}
      <Modal isOpen={EditModal} centered size="lg">
        <ModalHeader
          toggle={openEditModal}
          className="text-dark fs-4 fw-bolder">Edit Lost</ModalHeader>
        <ModalBody className="techer__modal-body">
          <Input type="file" className="form-control mb-3" id="file" />
          <Input
            id="name"
            className="mb-3"
            placeholder="Name"
            defaultValue={lostId && lostId.name} />
          <Input
            id="contact_info"
            className="mb-3"
            placeholder="Contact info"
            defaultValue={lostId && lostId.contact_info} />
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            defaultValue={lostId && lostId.description} />
          <select class="form-control mt-3" id="category">
            <option selected disabled>Category</option>
            {category && category.map((item, i) =>
              <option key={i} value={item.id}>{item.name}</option>
            )}
          </select>
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openEditModal}>Close</Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={editLostItem}>Save</Button>
        </ModalFooter>
      </Modal>

      {/* deleteModal */}
      <Modal isOpen={DeleteModal} centered size="lg">
        <ModalHeader
          toggle={openDeleteModal}
          className="text-dark fs-4 fw-bolder">Delete Lost</ModalHeader>
        <ModalBody className="techer__modal-body">
          {lostId.name} ni o'chirishga ishonchingiz komilmi?
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openDeleteModal}>Close</Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={deleteLostItem}>Yes</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Lost;
