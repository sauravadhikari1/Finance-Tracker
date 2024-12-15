import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup';
import DefaultLayout from './components/layout/DefaultLayout';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Auth from './auth/Auth';



function App() {
return (

  <div className='wrapper'>
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>

   <Route index element={<Login/>}/> 
   <Route path="signup" element={<Signup />}/> 
   <Route path="dashboard" element={
  <Auth>
    <Dashboard />
</Auth>    
    }/> 
   <Route path="transactions" element={
    <Auth>
    <Transaction/>
</Auth>    

   }/> 



      </Route>

    </Routes>
    <ToastContainer />
  </div>
  )
}

export default App
