import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import signUp from './pages/signUp'
function App() {
toast("hello boi")
return (

  <div className='wrapper'>
    <Routes>
   <Route path="/" element={<Login/>}/> 
   <Route path="/signUp" element={<signUp/>}/> 

    </Routes>
    <ToastContainer />
  </div>
  )
}

export default App
