import './App.css'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
function App() {
toast("hello boi")
return (

  <>
    <Routes>
   <Route path="/" element={<Login/>}/> 
    </Routes>
    <ToastContainer />
  </>
  )
}

export default App
