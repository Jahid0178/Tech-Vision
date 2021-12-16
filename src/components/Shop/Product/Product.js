import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  const { name, price, smallImg } = props.product;
  return (
    <>
      <Col sm={12} md={6} lg={3} className="my-3">
        <Card>
          <Card.Img variant="top" src={smallImg} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <span className="fw-bold">৳</span> {price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button>View Details</Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Product;
