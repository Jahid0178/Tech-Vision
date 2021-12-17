import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const SSD = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://tech-vision-dev.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.filter((product) => product.category === "SSD"))
      );
  }, []);
  console.log(products);
  return (
    <Container>
      <h2>SSD</h2>
    </Container>
  );
};

export default SSD;
