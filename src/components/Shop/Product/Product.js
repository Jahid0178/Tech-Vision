import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  const { name, price, smallImg, speed, cache, cores, id } = props.product;

  // get Product id for specific product details
  const viewDetails = (id) => {
    console.log(`click id: ${id}`);
  };
  return (
    <>
      <Col sm={12} md={6} lg={3} className="my-3">
        <Card>
          <Card.Img variant="top" src={smallImg} />
          <Card.Body>
            <Card.Title className="fs-6">{name}</Card.Title>
            <Card.Text>Clock Speed: {speed}</Card.Text>
            <Card.Text>{cache}</Card.Text>
            <Card.Text>{cores}</Card.Text>
          </Card.Body>
          <Card.Footer className="mx-auto border-0">
            <Card.Text className="text-center fw-bold product-price">
              {price} <span className="fw-bold">৳</span>
            </Card.Text>
            <Button onClick={() => viewDetails(id)}>View Details</Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Product;
