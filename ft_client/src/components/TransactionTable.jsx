// import React from 'react';
// import { Table, Button } from 'react-bootstrap';
// import { useUser } from '../context/UserContext';
// import { deleteTransaction } from '../helpers/axiosHelper';
// import { toast } from "react-toastify";


// const TransactionTable = () => {
 
//   const {transactions,getTransactionData}=useUser()
//   // Function to format the date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString(); // You can change the format as needed
//   };

//   const handleOnClick= async(tId)=>{
//     const pending = deleteTransaction(tId);
//         toast.promise(pending, {
//           pending: "Please wait...",
//         });
    
//         const { status, message } = await pending;
//         toast[status](message);
    
//         // If successful, add the transaction to the table
//         if (status === "success") {

// // Reset form inputs
//           getTransactionData()
//         }


//   }

//   return (
//     <div className="mt-4">
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Title</th>
//             <th>Amount</th>
//             <th>Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="text-center">
//                 No transactions available
//               </td>
//             </tr>
//           ) : (
//             transactions.map((transaction, index) => (
//               <tr key={index}>
//                 <td>{transaction.type}</td>
//                 <td>{transaction.title}</td>
//                 <td>${transaction.amount}</td>
//                 <td>{formatDate(transaction.tDate)}</td>
//                 <td>
//                   <Button variant="danger" size="sm" onClick={()=>{
//                     handleOnClick(transaction._id)
//                   }} >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default TransactionTable;

import React from "react";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useUser } from "../context/UserContext";
import { deleteTransaction } from "../helpers/axiosHelper";

const TransactionTable = () => {
  const { transactions, getTransactionData } = useUser();

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust formatting as needed
  };

  // Calculate total income and expenses
  const calculateTotals = () => {
    return transactions.reduce(
      (totals, transaction) => {
        if (transaction.type === "Income") {
          totals.income += parseFloat(transaction.amount || 0);
        } else if (transaction.type === "Expenses") {
          totals.expenses += parseFloat(transaction.amount || 0);
        }
        return totals;
      },
      { income: 0, expenses: 0 }
    );
  };

  const totals = calculateTotals();

  // Handle transaction deletion
  const handleOnClick = async (tId) => {
    try {
      const pending = deleteTransaction(tId); 

      toast.promise(pending, {
        pending: "Deleting transaction...",
      });

      const { status, message } = await pending;
      toast[status](message);

      // Refresh transactions after deletion
      if (status === "success") {
        await getTransactionData(); // Fetch latest transactions
      }
    } catch (error) {
      console.error("Error deleting transaction:", error.message);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-4">
      {/* Totals Section */}
      <div className="d-flex justify-content-between mb-3">
        <h5 className="text-success">Total Income: ${totals.income.toFixed(2)}</h5>
        <h5 className="text-danger">Total Expenses: ${totals.expenses.toFixed(2)}</h5>
        <h5 className="text-primary">
          Balance: ${(totals.income - totals.expenses).toFixed(2)}
        </h5>
      </div>

      {/* Transactions Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No transactions available
              </td>
            </tr>
          ) : (
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.type}</td>
                <td>{transaction.title}</td>
                <td>${transaction.amount}</td>
                <td>{formatDate(transaction.tDate)}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleOnClick(transaction._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionTable;


