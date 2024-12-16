import React, { useEffect } from 'react'
import { Col, Container } from "react-bootstrap";
import "../css/Signup.css"
import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';
import { useUser } from '../context/UserContext';


const Transaction = () => {
  const {getTransactionData} = useUser()
  useEffect(()=>{
    getTransactionData()
  },[])
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
