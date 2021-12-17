import React from "react";
import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Tech Vision</Navbar.Brand>
          <InputGroup className="w-50 rounded-pill overflow-hidden mx-auto">
            <FormControl placeholder="Search Your Products" />
            <Button variant="secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <Nav className="ms-auto">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
          <NavLink to="/login" className="nav-link">
            <Button>Login</Button>
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
