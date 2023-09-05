import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "./AddProducts.css";
import { Field, Formik, useFormik,ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  category: "",
  product_name: "",
  serial_number: "",
  purchase_price: "",
  warranty: "",
  warrenty_date:""
};
const onSubmit = (values) => {
  console.log("submit data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.number) {
    errors.number = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const AddProducts = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.errors);
  return (
    <>
      <section className="add_product">
        <Container>
          <Row>
            <Col lg={7} md={7} className="add_product_page mt-4 p-4">
              <div>
                <h2 className="text-capitalize text-center fw-bold  py-3">
                  add product
                </h2>
                <Form onClick={formik.handleSubmit}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label
                      column
                      lg="3"
                      md="3"
                      className="text-end text-capitalize"
                    >
                      category <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9" md="9">
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                        name="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
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
                      md="3"
                      className="text-end text-capitalize"
                    >
                      product name <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9" md="9">
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                        name="product_name"
                        onChange={formik.handleChange}
                        value={formik.values.product_name}
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
                      md="3"
                      className="text-end text-capitalize"
                    >
                      serial number
                    </Form.Label>
                    <Col lg="9" md="9">
                      <Form.Control
                        type="number"
                        name="serial_number"
                        placeholder="Enter serial number"
                        className="rounded-1"
                        onChange={formik.handleChange}
                        value={formik.values.serial_number}
                      />
                    </Col>
                  </Form.Group>


                  <Form.Group as={Row} className="mb-3" controlId="">
                    <Form.Label
                      column
                      lg="3"
                      md="3"
                      className="text-end text-capitalize"
                    >
                      purchase price <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9" md="9">
                      <Form.Control
                        type="number"
                        name="purchase_price"
                        placeholder="Purchase price"
                        className="rounded-1"
                        onChange={formik.handleChange}
                        value={formik.values.purchase_price}
                      />
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
                      md="3"
                      className="text-end text-capitalize"
                    >
                      warranty <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9" md="9">
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                        name="warranty"
                        onChange={formik.handleChange}
                        value={formik.values.warranty}
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
                      md="3"
                      className="text-end text-capitalize mt-0 pt-0"
                    >
                      warranty expire date{" "}
                      <span className="text-danger"> *</span>
                    </Form.Label>
                    <Col lg="9" md="9">
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                        name="warrenty_date"
                        onChange={formik.handleChange}
                        value={formik.values.warrenty_date}
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
                      md="3"
                      className="text-end text-capitalize"
                    ></Form.Label>
                    <Col lg="9" md="9">
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
