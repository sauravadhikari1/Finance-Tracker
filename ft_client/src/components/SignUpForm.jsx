import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import CustomInput from "./CustomInput";// Import the reusable input component
import "../css/Signup.css";
import { toast } from "react-toastify";
import {postNewUser} from "../helpers/axiosHelper"

const SignUpForm = () => {
const [form,setForm]=useState({});
  const handleOnChange=e=>{
    const{name,value}=e.target
    setForm({
      ...form,
      [name]:value
    })
  }
  const handleOnSubmit= async (e)=>{
    e.preventDefault()
    const{confirmPassword, ...rest}=form
    if(confirmPassword!== rest.password){
      return toast.error("password do not match")
    }
    
    const {status,message} = await postNewUser(rest)
    toast[status](message)
    // console.log(form)
  }
  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs={12} md={8} lg={6}>
            <Card className="signup-card shadow-lg">
              <Card.Body>
                <h2 className="text-center text-primary">Finance Tracker</h2>
                <p className="signup-tagline text-center text-muted">
                  Manage your money smarter, easier, and faster.
                </p>

                <Form onSubmit={handleOnSubmit}>
                  <CustomInput
                    type="text"
                    placeholder="Full Name"
                    icon={FaUser}
                    controlId="formName"
                    name="name"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    type="email"
                    placeholder="Email Address"
                    icon={FaEnvelope}
                    controlId="formEmail"
                    name="email"
                    onChange={handleOnChange}

                  />
                  <CustomInput
                    type="password"
                    placeholder="Password"
                    icon={FaLock}
                    controlId="formPassword"
                    name="password"
                    onChange={handleOnChange}

                  />
                  <CustomInput
                    type="password"
                    placeholder="Confirm Password"
                    icon={FaLock}
                    controlId="formConfirmPassword"
                    name="confirmPassword"
                    onChange={handleOnChange}

                  />

                  <Button variant="primary" type="submit" className="w-100 signup-button">
                    Sign Up
                  </Button>
                </Form>

                
                <p className="text-center mt-3 text-muted">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpForm;
