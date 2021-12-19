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
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/home">Tech Vision</Navbar.Brand>
          <InputGroup className="w-50 rounded-pill overflow-hidden mx-auto">
            <FormControl placeholder="Search Your Products" />
            <Button variant="secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              {!user.email ? (
                <NavLink to="/login" className="nav-link">
                  <Button className="user-login-btn">Login</Button>
                </NavLink>
              ) : (
                <NavLink to="/">
                  <Button className="user-logout-btn" onClick={logOut}>
                    Log Out
                  </Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
          {user.email ? (
            <p className="text-white mb-0 mx-2">{user.displayName}</p>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
