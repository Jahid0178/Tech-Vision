import React from "react";
import "./NewArrival.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NewArrival = (props) => {
  const { _id, name, price, smallImg } = props.product;
  const navigate = useNavigate();
  const viewDetails = (id) => {
    navigate(`/productDetails/${id}`);
  };
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
          <Button onClick={() => viewDetails(_id)}>View Details</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NewArrival;
