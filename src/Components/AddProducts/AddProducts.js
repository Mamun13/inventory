import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "./AddProducts.css";

const AddProducts = () => {
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <section className="add_product">
        <Container>
          <Row>
            <Col lg={7} className="add_product_page mt-4 p-4">
              <div>
                <h2 className="text-capitalize text-center fw-bold  py-3">
                  add product
                </h2>
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    >
                      category <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9">
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    >
                      product name <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9">
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                      >
                        <option disabled>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    >
                      serial number
                    </Form.Label>
                    <Col lg="9">
                      <Form.Control
                        type="number"
                        placeholder="Enter serial number"
                        className="rounded-1"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    >
                      purchase price <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9">
                      <Form.Control
                        type="number"
                        placeholder="Purchase price"
                        className="rounded-1"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    >
                      purchase date <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9">
                      <Form.Control
                        type="date"
                        placeholder=""
                        className="rounded-1"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    ></Form.Label>
                    <Col lg="9">
                      <div className="d-flex ">
                        <Form.Check
                          aria-label="option 1"
                          onClick={handleClick}
                          defaultChecked=""
                        />
                        <p className="text-capitalize ps-2 m-0">Has warranty</p>
                      </div>
                      {/* 
                      {isShown && (
                        <div className="">
                          <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextEmail"
                          >
                            <Form.Label
                              column
                              lg="3"
                              className="text-end text-capitalize"
                            >
                              category <span className="text-danger"> *</span>
                            </Form.Label>
                            <Col lg="9">
                              <Form.Select
                                aria-label="Default select example"
                                className="rounded-1"
                              >
                                <option disabled>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Form.Group>
                        </div>
                      )}

                      {isShown || (
                        <div>
                          <h2></h2>
                        </div>
                      )} */}
                    </Col>
                  </Form.Group>

                  {isShown && <div></div>}

                  {isShown || (
                    <div>
                      <div className="">
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextEmail"
                        >
                          <Form.Label
                            column
                            lg="3"
                            className="text-end text-capitalize"
                          >
                            warranty <span className="text-danger"> *</span>
                          </Form.Label>
                          <Col lg="9">
                            <Form.Select
                              aria-label="Default select example"
                              className="rounded-1"
                            >
                              <option disabled>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Col>
                        </Form.Group>
                        <Form.Group
                          as={Row}
                          className="mb-3"
                          controlId="formPlaintextEmail"
                        >
                          <Form.Label
                            column
                            lg="3"
                            className="text-end text-capitalize mt-0 pt-0"
                          >
                            warranty expire date{" "}
                            <span className="text-danger"> *</span>
                          </Form.Label>
                          <Col lg="9">
                            <Form.Select
                              aria-label="Default select example"
                              className="rounded-1"
                            >
                              <option disabled>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Col>
                        </Form.Group>
                      </div>
                    </div>
                  )}
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    >
                      upload image <span className="text-danger"> </span>
                    </Form.Label>
                    <Col lg="9">
                      <div>
                        <input className="" type="file" />
                      </div>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      className="text-end text-capitalize"
                    ></Form.Label>
                    <Col lg="9">
                      <button
                        type="submit"
                        className="border bg-primary text-light px-5 py-2 rounded-2"
                      >
                        Submit
                      </button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AddProducts;
