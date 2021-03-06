import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://tech-vision-dev.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  return (
    <Container>
      <h2>Our All Products</h2>
      <Row>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
