import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const id = parseInt(productId);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.find((product) => product.id === id)));
  }, []);

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
            <h4>{product.name}</h4>
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
            <h5>Key Features</h5>
            <p>Model: {product.model}</p>
            <p>Speed: {product.speed}</p>
            <p>Cores: {product.cache}</p>
            <p>Memory Speed: {product.memorySpeed}</p>
            <p>Graphics: {product.graphics}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
