import React from 'react'
import { Col, Container } from "react-bootstrap";
import "../css/Signup.css"
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';


const Transaction = () => {
  return (
    <div className="signup-page">
      <Container className=' p-5 rounded'>
       <Col >
        <TransactionForm/>
        <hr />
        <TransactionTable/>
        </Col>
      </Container>
    </div>
  );
};

export default Transaction
