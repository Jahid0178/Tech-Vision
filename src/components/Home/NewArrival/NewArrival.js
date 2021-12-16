import React from "react";
import "./NewArrival.css";
import { Card, Button } from "react-bootstrap";
const NewArrival = (props) => {
  const { name, img, price, smallImg } = props.product;
  return (
    <>
      <Card
        style={{ width: "19rem" }}
        className="new-arrival-product-card my-3"
      >
        <Card.Img variant="top" src={smallImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: $ {price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>View Details</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewArrival;
