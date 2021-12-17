import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import GraphicsCard from "../GraphicsCard/GraphicsCard";
import "./Graphics.css";

const Graphics = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://tech-vision-dev.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.filter((product) => product.category === "graphics-card")
        )
      );
  }, []);

  return (
    <Container>
      <h2 className="title-underline">Graphics Card</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <GraphicsCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Graphics;
