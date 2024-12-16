// import React, { useState } from 'react'
// import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { postNewTransaction } from '../helpers/axiosHelper';

// import CustomInput from "./CustomInput";// Import the reusable input component
// import "../css/Signup.css";
// import { useForm } from "../customHooks/useForm";
// const initialState={
//   type:"",
//   title:"",
//   amount:"",
//   tDate:""
// }
// const TransactionForm =  () => {
//   const {form,setForm,handleOnChange}=useForm(initialState)

//   const handleOnSubmit= async (e)=>{
//     e.preventDefault()
   
//     const pending = postNewTransaction(form)
//     toast.promise(pending,{
//       pending:"please wait"
//     })
//     const {status,message}=await pending
//     toast[status](message)
//     status === 'success' && setForm(initialState)
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
import TransactionTable from "./TransactionTable"; // Transaction Table component
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
  const [transactions, setTransactions] = useState([]); // State to track submitted transactions
  const [loading, setLoading] = useState(false); // State to manage loading
  const {getTransactionData}=useUser()
  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    // Show a pending toast notification
    const pending = postNewTransaction(form);
    // console.log(form)
    toast.promise(pending, {
      pending: "Please wait...",
    });

    const { status, message } = await pending;
    toast[status](message);

    // If successful, add the transaction to the table
    if (status === "success") {
      setTransactions([...transactions, form]);
      setForm(initialState); // Reset form inputs
      getTransactionData()
    }

    setLoading(false); // Reset loading state
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
                    {/* <Form.Label>Type</Form.Label> */}
                    <Form.Select
                      className="custom-select"
                      name="type"
                      value={form.type}
                      onChange={handleOnChange} // Ensure the handleOnChange is used for syncing state
                    >
                      <option value="Income">Income</option>
                      <option value="Expenses">Expenses</option>
                    </Form.Select>
                  </Form.Group>

                  {/* Custom Input Fields */}
                  <CustomInput
                    type="text"
                    placeholder="Title"
                    controlId="formTitle"
                    name="title"
                    onChange={handleOnChange} // The onChange function is passed down
                    value={form.title} // The value is controlled by the parent state
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

                  {/* Submit Button with loading state */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 signup-button"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Transaction Table */}
       
      </Container>
    </div>
  );
};

export default TransactionForm;

