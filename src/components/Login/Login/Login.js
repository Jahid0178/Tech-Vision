import React from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Login.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h1 className="text-center pt-2">Welcome To Tech Vision</h1>
      <h2 className="text-center">Login Your Account</h2>
      <Row>
        <Col sm={12} md={6}>
          <img
            src={"https://i.ibb.co/bJSTRsp/Login-pana.png"}
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <label>Email</label>
              <input
                type="email"
                className="login-input-field"
                placeholder="Enter Your Email"
                {...register("email")}
              />

              {/* include validation with required or other standard HTML validation rules */}
              <label>Password</label>
              <input
                type="password"
                className="login-input-field"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input className="login-btn" type="submit" value="Login" />
            </form>
            <p className="my-2">
              Don't have an account?
              <Link to="/register" className="ms-1">
                Please Create an account
              </Link>
            </p>
            <span className="fw-bold">
              ---------------------Or---------------------
            </span>
            <br />
            <div className="mt-2">
              <Button
                onClick={signInWithGoogle}
                className="bg-transparent text-black border-dark"
              >
                <i class="fab fa-google"></i> Google Sign In
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
