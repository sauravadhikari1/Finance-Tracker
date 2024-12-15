import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const Auth = ({ children }) => {
    const {user}=useUser()
  return user?._id ? children:<Navigate to="/" replace/>
}

export default Auth
