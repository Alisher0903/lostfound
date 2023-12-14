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
  ModalFooter,
  Input,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import axios from "axios";
import { api, byId } from "../../components/api/api";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from "react-toastify";

const Found = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [found, setFound] = useState([]);
  const [category, setCategory] = useState([]);
  const [foundId, setFoundId] = useState([]);

  const openAddModal = () => setAddModal(!addModal);
  const openEditModal = () => setEditModal(!editModal);
  const openDeleteModal = () => setDeleteModal(!deleteModal);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    getFound();
    getCategory();
  }, []);

  // getFound
  const getFound = () => {
    axios.get(api + "item/", {
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
      },
    })
      .then(res => setFound(res.data.filter(t => t.type == "FOUND")))
      .catch(() => console.log("Found kelmadi!!!"))
  }

  // getCategory
  const getCategory = () => {
    axios.get(api + "category/", {
      headers: { Authorization: sessionStorage.getItem('jwtToken') }
    })
      .then(res => setCategory(res.data))
      .catch(() => console.log("category kelmadi!!!"))
  }

  // addFoundItem
  const addFoundItem = () => {
    const addData = new FormData();
    addData.append("image", byId("file").files[0]);
    addData.append("name", byId("name").value);
    addData.append("description", byId("description").value);
    addData.append("contact_info", byId("contact_info").value);
    addData.append("type", "FOUND");
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
        getFound();
        toast.success("Found item muvaffaqiyatli qo'shildi✔")
      })
      .catch(() => toast.error("Found item qo'shishda xatolik yuz berdi!!!"))
  }

  // editFoundItem
  const editFoundItem = () => {
    const editData = new FormData();
    editData.append("image", byId("file").files[0]);
    editData.append("name", byId("name").value);
    editData.append("description", byId("description").value);
    editData.append("contact_info", byId("contact_info").value);
    editData.append("type", "FOUND");
    editData.append("latitude", 0);
    editData.append("longitude", 0);
    editData.append("category ", byId("category").value);
    editData.append("id", foundId.id);

    axios.put(api + "item" + foundId.id + "/", editData, {
      headers: {
        Authorization: sessionStorage.getItem('jwtToken'),
      },
    })
      .then(() => {
        openEditModal();
        getFound();
        toast.success("Found item muvaffaqiyatli taxrirlandi✔")
      })
      .catch(() => {
        toast.error("Found item taxrirlashda xatolik yuz berdi!!!")
      })
  }

  // deleteFoundItem
  const deleteFoundItem = () => {
    axios.delete(api + "item" + foundId.id + "/", {
      headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
      },
    })
      .then(() => {
        toast.success("Found item o'chirildi!!!");
        openDeleteModal();
        getFound();
      })
      .catch(() => toast.error("Found item o'chirishda xatolik yuz berdi!!!"))
  }

  // search
  const searchFound = () => {
    let searchItem = byId("search").value
    if (!!searchItem) axios.get(api + "item/?search=" + searchItem).then(res => setFound(res.data.filter(t => t.type == "FOUND")))
    else getFound();
  }

  // category filter
  const categoryFIlter = () => {
    let categoryId = byId("categoryFilter").value
    axios.get(api + "item/category/" + categoryId + "/", {
      headers: { Authorization: sessionStorage.getItem("jwtToken") }
    })
      .then(res => setFound(res.data.filter(c => c.type == "FOUND")))
      .catch(() => console.log("category filter ishlamadi!!!"))
  }

  // my lost filter
  const myFoundFilter = () => {
    axios.get(api + "items/", {
      headers: { Authorization: sessionStorage.getItem("jwtToken") }
    })
      .then(res => setFound(res.data.filter(i => i.type == "FOUND")))
      .catch(() => console.log("my items kelamdi!!!"))
  }

  // goFoundInfo
  const goFoundInfo = () => byId("goFoundInfo").click();

  return (
    <>
      <Link to="/found/about" id="goFoundInfo"></Link>
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
                        onChange={searchFound}
                        style={{ width: "50%" }}
                        placeholder="🔍 search" />
                    </div>
                  </Col>
                  <Col className="text-center d-none d-lg-block" lg="6">
                    <img className="pb-4" style={{ objectFit: "cover", height: "400px" }} src={require("assets/img/theme/profile.png")} alt="" />
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
                      getFound();
                      byId("categoryFilter").value = "Category filter"
                    }}
                    className="btn-neutral btn-icon py-1"
                    color="default"
                    size="sm">
                    All
                  </Button>
                  <Button
                    onClick={() => {
                      myFoundFilter();
                      byId("categoryFilter").value = "Category filter"
                    }}
                    className="btn-neutral btn-icon py-1"
                    color="default"
                    size="sm">
                    My Found
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
                  {found && found.map((item, i) =>
                    <Col lg="4" className="mb-5" key={i}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="pb-5">
                          <img
                            src={item.image}
                            alt="..."
                            className="img-fluid "
                            style={{ width: "100%", height: "230px", objectFit: "cover" }} />
                          <h6 className="text-primary mt-4 text-uppercase">
                            {item.name}
                          </h6>
                          <Row>
                            <Col className="col-8">
                              <Button
                                onClick={() => {
                                  goFoundInfo();
                                  sessionStorage.setItem("foundAbout", item.id);
                                }}
                                className="mt-4"
                                color="primary">
                                Learn more
                              </Button>
                            </Col>
                            <Col style={{ marginTop: "2rem" }}>
                              <Link className="mr-3" onClick={() => {
                                openEditModal();
                                setFoundId(item);
                              }}>
                                <Icon icon="uiw:edit" width="23" />
                              </Link>
                              <Link onClick={() => {
                                openDeleteModal();
                                setFoundId(item);
                              }}>
                                <Icon icon="ic:baseline-delete" width="25" />
                              </Link>
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

      {/* addModal */}
      <Modal isOpen={addModal} centered size="lg">
        <ModalHeader
          toggle={openAddModal}
          className="text-dark fs-4 fw-bolder">Add Found</ModalHeader>
        <ModalBody className="techer__modal-body">
          <Input type="file" className="form-control mb-3" id="file" />
          <Input
            id="name"
            className="mb-3"
            placeholder="Name" />
          <Input
            id="contact_info"
            className="mb-3"
            placeholder="Contact info" />
          <textarea
            id="description"
            className="form-control"
            placeholder="Description" />
          <select
            id="category"
            className="form-control mt-3">
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
            onClick={addFoundItem}>Save</Button>
        </ModalFooter>
      </Modal>

      {/* editModal */}
      <Modal isOpen={editModal} centered size="lg">
        <ModalHeader
          toggle={openEditModal}
          className="text-dark fs-4 fw-bolder">Edit Found</ModalHeader>
        <ModalBody className="techer__modal-body">
          <Input type="file" className="form-control mb-3" id="file" />
          <Input
            id="name"
            className="mb-3"
            placeholder="Name"
            defaultValue={foundId && foundId.name} />
          <Input
            id="contact_info"
            className="mb-3"
            placeholder="Contact info"
            defaultValue={foundId && foundId.contact_info} />
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            defaultValue={foundId && foundId.description} />
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
            onClick={editFoundItem}>Save</Button>
        </ModalFooter>
      </Modal>

      {/* delete modal */}
      <Modal isOpen={deleteModal} centered size="lg">
        <ModalHeader
          toggle={openDeleteModal}
          className="text-dark fs-4 fw-bolder">Delete Found</ModalHeader>
        <ModalBody className="techer__modal-body">
          {foundId.name} ni o'chirishga ishonchingiz komilmi?
        </ModalBody>
        <ModalFooter>
          <Button
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            className="bg-danger"
            onClick={openDeleteModal}>Close</Button>
          <Button
            className="bg-success"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            onClick={deleteFoundItem}>Yes</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Found;
