import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./GraphicsCard.css";

const GraphicsCard = (props) => {
  const { _id, name, smallImg } = props.product;
  const navigate = useNavigate();
  const viewDetails = (id) => {
    navigate(`/productDetails/${id}`);
  };
  return (
    <div className="my-3">
      <Card style={{ width: "18rem" }} className="product-card">
        <Card.Img variant="top" src={smallImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            className="view-details-btn"
            onClick={() => viewDetails(_id)}
            variant="primary"
          >
            View Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GraphicsCard;
