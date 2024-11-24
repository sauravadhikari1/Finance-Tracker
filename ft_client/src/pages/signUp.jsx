import React from 'react'
import { Container } from "react-bootstrap";
import "../css/Signup.css"
import SignUpForm from '../components/SignUpForm';

const Signup = () => {
  return (
    <div className="signup-page">
      <Container>
        <SignUpForm/>
      </Container>
    </div>
  );
};

export default Signup
