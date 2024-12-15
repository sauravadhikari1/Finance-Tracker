import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useLocation } from 'react-router-dom'

const Auth = ({ children }) => {
  const location =useLocation()
  console.log(location)
    const {user}=useUser()
  return user?._id ? children:<Navigate to="/" replace
  state={
    {from:location}
  }
    />
}

export default Auth
