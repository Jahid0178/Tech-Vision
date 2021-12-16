import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import NewArrival from "../NewArrival/NewArrival";
import "./NewArrivals.css";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.filter((product) => product.category === "processor"))
      );
  }, []);

  return (
    <Container className="my-3">
      <h2 className="new-arrivals-title">New Arrivals</h2>
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
          <SwiperSlide key={product.id}>
            <NewArrival product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default NewArrivals;
