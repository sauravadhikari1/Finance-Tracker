import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Header = () => {
 const {user,setUser} =useUser()
  const handleOnClick=()=>{
  localStorage.removeItem("accessJWT")
    setUser({})
 }

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#1c7aec", // Dark blue for contrast
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
      }}
    >
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand
          as={Link} // Use Link from react-router-dom
          to="/" // Navigate to the home page
          style={{
            color: "#ffffff", // White text for readability
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Logo
        </Navbar.Brand>

        {/* Toggler for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#ffffff" }} />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Right: Login and Sign Up */}
          <Nav className="ms-auto">
          {
            user?._id?(
              <>
              <Button
                as={Link} // Use Link from react-router-dom
                to="/dashboard" // Navigate to the signup page
                variant="light"
              className="me-2"

                style={{
                  backgroundColor: "#3b82f6", // Button background color
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Dashboard
              </Button>
              <Button
                as={Link} // Use Link from react-router-dom
                to="/Transactions" // Navigate to the signup page
                variant="light"
              className="me-2"

                style={{
                  backgroundColor: "#3b82f6", // Button background color
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Transactions
              </Button>

            <Button
              onClick={handleOnClick}
              variant="light"
              className="me-2"
              style={{
                backgroundColor: "#3b82f6", // Button background color
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>

              </>
            ):
            (
              <>
               <Button
                as={Link} // Use Link from react-router-dom
                to="/signup" // Navigate to the signup page
                variant="light"
              className="me-2"

                style={{
                  backgroundColor: "#3b82f6", // Button background color
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Button>
            <Button
              as={Link} // Use Link from react-router-dom
              to="/" // Navigate to the login page
              variant="light"
              className="me-2"
              style={{
                backgroundColor: "#3b82f6", // Button background color
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
            
              
              </>
            )
          }

             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
