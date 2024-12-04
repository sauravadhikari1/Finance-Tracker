import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import {  FaEnvelope, FaLock } from "react-icons/fa";
import CustomInput from "./CustomInput";// Import the reusable input component
import "../css/Signup.css";
import { useForm } from "../customHooks/useForm";
initialState={
  email:"",
  password:""
}
const SignInForm = () => {
  const {form,handleOnChange}=useForm(initialState)
  
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    console.log(form)

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
                  

                  <Button variant="primary" type="submit" className="w-100 signup-button">
                    Log In
                  </Button>
                </Form>

                
                <p className="text-center mt-3 text-muted">
                  Don't have an account? <a href="/signup">Sign Up</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
  

}
export default SignInForm
