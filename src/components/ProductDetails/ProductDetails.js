import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams({});
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const url = "https://tech-vision-dev.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setProduct(data.find((product) => product._id === productId))
      );
  }, [productId]);

  // Increment button
  const handleIncrement = () => {
    const increment = counter + 1;
    setCounter(increment);
  };

  // Decrement button
  const handleDecrement = () => {
    const decrement = counter - 1;
    if (decrement >= 0) {
      setCounter(decrement);
    }
  };

  return (
    <div className="py-3 my-3">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img
              src={product.largeImg}
              alt={product.name}
              className="img-fluid"
            />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div>
              <h5 style={{ color: "#3749BB" }}>{product.name}</h5>
              <table className="product-table">
                <tbody className="d-flex flex-wrap">
                  <tr className="me-2">
                    <td>Price:</td>
                    <td>{product.price}</td>
                  </tr>
                  <tr className="me-2">
                    <td>Regular Price:</td>
                    <td>{product.regularPrice}</td>
                  </tr>
                  <tr className="me-2">
                    <td>Status:</td>
                    <td>{product.status}</td>
                  </tr>
                  <tr className="me-2">
                    <td>Product Code:</td>
                    <td>{product.productCode}</td>
                  </tr>
                  <tr className="me-2">
                    <td>Brand:</td>
                    <td>{product.brand}</td>
                  </tr>
                </tbody>
              </table>
              <h5 className="fw-bold">Key Features</h5>
              <p>Model: {product.model}</p>
              <p>
                {product.speed
                  ? "Speed: " + product.speed
                  : product.clockSpeed
                  ? "Clock Speed: " + product.clockSpeed
                  : "Capacity: " + product.capacity}
              </p>
              <p>
                {product.cache
                  ? "Cache: " + product.cache
                  : product.clockMemory
                  ? "Clock Memory: " + product.clockMemory
                  : product.interface
                  ? "Interface: " + product.interface
                  : ""}
              </p>
              <p>
                {product.memorySpeed
                  ? "Memory Speed: " + product.memorySpeed
                  : product.memorySize
                  ? "Memory Size: " + product.memorySize
                  : product.factor
                  ? "Factor: " + product.factor
                  : ""}
              </p>
              <p>
                {product.graphics
                  ? "Graphics: " + product.graphics
                  : product.memoryBus
                  ? "Memory Bus: " + product.memoryBus
                  : ""}
              </p>
            </div>
            <div
              className="btn-group w-25"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <Button
                onClick={() => handleDecrement()}
                className="btn btn-primary fw-bold"
              >
                -
              </Button>
              <input
                type="text"
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
                className="btn btn-outline-primary w-25 numbers"
              />

              <Button
                onClick={() => handleIncrement()}
                className="btn btn-primary fw-bold"
              >
                +
              </Button>
            </div>
            <Button className="ms-3 purchase-btn">Purchase Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
