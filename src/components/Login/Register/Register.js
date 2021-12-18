import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h3 className="text-center pt-3">Register Your Account</h3>
      <div>
        <Row>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                placeholder="First Name"
                className="register-input-field"
                {...register("firstName")}
              />

              {/* include validation with required or other standard HTML validation rules */}
              <input
                placeholder="Last Name"
                className="register-input-field"
                {...register("lastName", { required: true })}
              />
              <input
                placeholder="Email"
                className="register-input-field"
                {...register("email", { required: true })}
              />
              <input
                placeholder="Password"
                type="password"
                className="register-input-field"
                {...register("password", { required: true })}
              />
              <input
                placeholder="Confirm Password"
                type="password"
                className="register-input-field"
                {...register("confirmPassword", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input className="register-btn" type="submit" value="Register" />
            </form>
          </Col>
          <Col sm={12} md={6}>
            <img
              src={"https://i.ibb.co/ww2Xr0f/Mobile-login.gif"}
              alt="Register"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
