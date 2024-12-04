import React from 'react'
import  Container  from 'react-bootstrap/Container'
import SignInForm from '../components/SignInForm'


const Login = () => {
  return (
    <div>
       <div className="signup-page">
      <Container>
        <SignInForm/>
      </Container>
    </div>
    </div>
  )
}

export default Login
