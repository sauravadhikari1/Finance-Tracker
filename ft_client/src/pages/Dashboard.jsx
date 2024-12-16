// import React from 'react'
// import { Col, Container } from "react-bootstrap";
// import "../css/Signup.css"


// const Dashboard = () => {
//   return (
//     <div className="signup-page">
//       <Container>
//        <Col md={6}>Todo Dashboard </Col>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard


import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import { useUser } from "../context/UserContext";

// Register necessary Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { transactions, getTransactionData } = useUser();

  // Fetch transaction data when component mounts
  useEffect(() => {
    // If no transactions are available, fetch data
    if (!transactions || transactions.length === 0) {
      getTransactionData();
    }
  }, [getTransactionData, transactions]);

  // Handle empty transactions
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return (
      <div className="text-center mt-5">
        <h5>No transactions available to display charts.</h5>
      </div>
    );
  }

  // Calculate totals for income and expenses
  const totals = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "Income") {
        acc.income += parseFloat(transaction.amount || 0);
      } else if (transaction.type === "Expenses") {
        acc.expenses += parseFloat(transaction.amount || 0);
      }
      return acc;
    },
    { income: 0, expenses: 0 }
  );

  // Prepare Pie Chart Data
  const pieData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [totals.income, totals.expenses],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  // Prepare Line Chart Data
  const lineData = {
    labels: transactions.map((t) =>
      new Date(t.tDate).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Income",
        data: transactions
          .filter((t) => t.type === "Income")
          .map((t) => t.amount),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
      {
        label: "Expenses",
        data: transactions
          .filter((t) => t.type === "Expenses")
          .map((t) => t.amount),
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        fill: true,
      },
    ],
  };

  const pieOptions = { plugins: { legend: { position: "bottom" } } };
  const lineOptions = {
    plugins: { legend: { position: "top" } },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Amount" } },
    },
  };

  return (
    <div className="mt-4">
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <h5 className="text-center">Income vs Expenses</h5>
              <Pie data={pieData} options={pieOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <h5 className="text-center">Transaction Trends</h5>
              <Line data={lineData} options={lineOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
