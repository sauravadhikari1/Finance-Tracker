// import React, { useState } from 'react'
// import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { postNewTransaction } from '../helpers/axiosHelper';

// import CustomInput from "./CustomInput";// Import the reusable input component
// import "../css/Signup.css";
// import { useForm } from "../customHooks/useForm";
// import { useUser } from '../context/UserContext';
// const initialState={
//   type:"",
//   title:"",
//   amount:"",
//   tDate:""
// }
// const TransactionForm =  () => {
//   const {form,setForm,handleOnChange}=useForm(initialState)
//   const {getTransactionData}=useUser
//   const handleOnSubmit= async (e)=>{
//     e.preventDefault()
   
//     const pending = postNewTransaction(form)
//     toast.promise(pending,{
//       pending:"please wait"
//     })
//     const {status,message}=await pending
//     toast[status](message)
//     if (status === 'success'){  
//       setForm(initialState)
//     getTransactionData()
   
//     }
//   }
  

//   return (
//     <div>
//        <div className="signup-page">
//       <Container>
//         <Row className="justify-content-center align-items-center min-vh-100">
//           <Col xs={12} md={8} lg={6}>
//             <Card className="signup-card shadow-lg">
//               <Card.Body>
//                 <h2 className="text-center text-primary">Finance Tracker</h2>
//                 <p className="signup-tagline text-center text-muted">
//                   Manage your money smarter, easier, and faster.
//                 </p>

//                 <Form onSubmit={handleOnSubmit}>
//                   <CustomInput
//                     type="text"
//                     placeholder="type"
//                     // icon={FaUser}
//                     controlId="formName"
//                     name="type"
//                     onChange={handleOnChange}
//                     value={form.type}
                    
//                   />
//                   <CustomInput
//                     type="text"
//                     placeholder="Title"
//                     // icon={FaEnvelope}
//                     controlId="formEmail"
//                     name="title"
//                     onChange={handleOnChange}
//                     value={form.title}

//                   />
//                   <CustomInput
//                     type="number"
//                     placeholder="Amount"
//                     // icon={FaLock}
//                     controlId="formPassword"
//                     name="amount"
//                     onChange={handleOnChange}
//                     value={form.amount}

//                   />
//                   <CustomInput
//                     type="date"
//                     placeholder="Date"
//                     // icon={FaLock}
//                     controlId="formtDate"
//                     name="tDate"
//                     onChange={handleOnChange}
//                     value={form.tDate}

//                   />

//                   <Button variant="primary" type="submit" className="w-100 signup-button">
//                     Submit
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     </div>
//   )
// }

// export default TransactionForm


import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { postNewTransaction } from "../helpers/axiosHelper";

import CustomInput from "./CustomInput"; // Reusable input component
import TransactionTable from "./TransactionTable"; // Import the Transaction Table component
import "../css/Signup.css";
import { useForm } from "../customHooks/useForm";
import { useUser } from "../context/UserContext";

// Initial state for the form inputs
const initialState = {
  type: "Income", // Default to 'Income'
  title: "",
  amount: "",
  tDate: "",
};

const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const {transactions, setTransactions,getTransactionData} = useUser(); // State to track submitted transactions

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Show a pending toast notification
    const pending = postNewTransaction(form);
    toast.promise(pending, {
      pending: "Please wait...",
    });

    const { status, message } = await pending;
    toast[status](message);

    // If successful, add the transaction to the table
    if (status === "success") {
      setTransactions(transactions);
      setForm(initialState); // Reset form inputs
      getTransactionData()
    }
  };

  return (
    <div className="signup-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs={12} md={8} lg={6}>
            {/* Form Card */}
            <Card className="signup-card shadow-lg mb-4">
              <Card.Body>
                <h2 className="text-center text-primary">Finance Tracker</h2>
                <p className="signup-tagline text-center text-muted">
                  Manage your money smarter, easier, and faster.
                </p>

                <Form onSubmit={handleOnSubmit}>
                  {/* Dropdown for Type */}
                  <Form.Group controlId="formType" className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      name="type"
                      value={form.type}
                      onChange={handleOnChange}
                    >
                      <option value="Income">Income</option>
                      <option value="Expenses">Expenses</option>
                    </Form.Select>
                  </Form.Group>

                  <CustomInput
                    type="text"
                    placeholder="Title"
                    controlId="formTitle"
                    name="title"
                    onChange={handleOnChange}
                    value={form.title}
                  />
                  <CustomInput
                    type="number"
                    placeholder="Amount"
                    controlId="formAmount"
                    name="amount"
                    onChange={handleOnChange}
                    value={form.amount}
                  />
                  <CustomInput
                    type="date"
                    placeholder="Date"
                    controlId="formtDate"
                    name="tDate"
                    onChange={handleOnChange}
                    value={form.tDate}
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 signup-button"
                  >
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </Container>
    </div>
  );
};

export default TransactionForm; 