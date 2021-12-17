import React from "react";
import {
  Col,
  FormControl,
  InputGroup,
  Row,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="mt-3 py-3">
      <Row>
        <Col sm={12}>
          <h3>Tech Vision</h3>
          <p className="text-secondary">
            &copy; 2021 Tech Vision, <br /> All Rights Reserved
          </p>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <h6>About</h6>
          <ul className="footer-ul">
            <li className="my-2">
              <Link className="footer-link" to="#">
                About US
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Store Location
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Contact
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Orders Trackings
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <h6>Useful Links</h6>
          <ul className="footer-ul">
            <li className="my-2">
              <Link className="footer-link" to="#">
                Returns
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Support Policy
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Size Guide
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                FAQs
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <h6>Follow US</h6>
          <ul className="footer-ul">
            <li className="my-2">
              <Link className="footer-link" to="#">
                Twitter
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Facebook
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Instagram
              </Link>
            </li>
            <li className="my-2">
              <Link className="footer-link" to="#">
                Youtube
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <h4>Subscribe</h4>
          <p>Subscribe to our newsletter to receive news on update.</p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Your Email Address"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="secondary">Submit</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
