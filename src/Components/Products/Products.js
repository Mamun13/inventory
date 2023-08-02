import React from "react";
import "./Products.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { FiEdit } from 'react-icons/fi';
import { Link } from "react-router-dom";
import DeleteModel from "./DeleteModel";

const Products = () => {
  return (
    <>
      <section>
        {/* <div className="all_products"></div> */}
        <Container>
          {/* <Col lg={12}></Col> */}
          <div className="d-flex justify-content-between my-4">
            <div className="">
              <Link to="/add-product" className="text-capitalize rounded-1 bg-primary text-white text-decoration-none px-4 py-2">
                add inventory
              </Link>
            </div>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 rounded-1"
                />
                <Button variant="primary" className="text-capitalize rounded-1">
                  search
                </Button>
              </Form>
            </div>
            
            
          </div>
          <Row>
              <Col lg={12}>
              <div className="product_table">
              <Table striped>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Asset No.</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Serial No.</th>
                    <th>Price</th>
                    <th>Warranty</th>
                    <th>Purchase Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>LA1000001</td>
                    <td className="text-capitalize">laptop</td>
                    <td className="text-capitalize">image</td>
                    <td className="text-capitalize">probook 440GB</td>
                    <td className="text-capitalize">a123456789</td>
                    <td>123456</td>
                    <td>3 year</td>
                    <td>22 oct 2022</td>
                    <td className="d-flex align-items-center">
                      <Link to="" className="me-2 pt-0 bg-success p-1 rounded-1 text-white">
                        <FiEdit size={"15px"} className="m-0 p-0"/>
                      </Link>
                      {/* <Link to="" className="bg-danger p-1 rounded-1 text-white pt-0">
                      </Link> */}
                      <DeleteModel/>
                    </td>
                  </tr>
                 
                </tbody>
              </Table>
            </div>
              </Col>
            </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
