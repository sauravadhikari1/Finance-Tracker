import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";

import CustomInput from "./CustomInput";// Import the reusable input component
import "../css/Signup.css";
import { useForm } from "../customHooks/useForm";
const initialState={
  type:"",
  title:"",
  amount:"",
  tdate:""
}
const TransactionForm = () => {
  const {form,setForm,handleOnChange}=useForm(initialState)

  const handleOnSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
  }
  
  return (
    <div>
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
                    placeholder="type"
                    // icon={FaUser}
                    controlId="formName"
                    name="type"
                    onChange={handleOnChange}
                    value={form.type}
                    
                  />
                  <CustomInput
                    type="text"
                    placeholder="Title"
                    // icon={FaEnvelope}
                    controlId="formEmail"
                    name="title"
                    onChange={handleOnChange}
                    value={form.title}

                  />
                  <CustomInput
                    type="number"
                    placeholder="Amount"
                    // icon={FaLock}
                    controlId="formPassword"
                    name="amount"
                    onChange={handleOnChange}
                    value={form.amount}

                  />
                  <CustomInput
                    type="date"
                    placeholder="Date"
                    // icon={FaLock}
                    controlId="formConfirmPassword"
                    name="tDate"
                    onChange={handleOnChange}
                    value={form.tdate}

                  />

                  <Button variant="primary" type="submit" className="w-100 signup-button">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default TransactionForm
