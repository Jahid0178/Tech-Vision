import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="carousel-items">
          <img
            className="d-block w-100 img-fluid"
            style={{ height: "90vh", objectFit: "cover" }}
            src={"https://i.ibb.co/5RmZmhX/pexels-pixabay-325876.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-items">
          <img
            className="d-block w-100 img-fluid"
            style={{ height: "90vh", objectFit: "cover" }}
            src={"https://i.ibb.co/Wy7xxN0/pexels-artem-beliaikin-2447042.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-items">
          <img
            className="d-block w-100 img-fluid"
            style={{ height: "90vh", objectFit: "cover" }}
            src={
              "https://i.ibb.co/Yb6PRnn/the-creative-exchange-k-WVIm-L5-Qx-JI-unsplash.jpg"
            }
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
