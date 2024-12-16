import { createContext, useContext, useState } from "react";
import { getNewTransaction } from "../helpers/axiosHelper";
export const UserContext=createContext();


export const UserProvider= ( { children} )=>{
const [user,setUser]=useState({})
const [transactions,setTransactions]=useState([]);

const getTransactionData= async()=>{
  const {status, transactions} = await getNewTransaction()
  status ==='success' && setTransactions(transactions)
}

  return(

    <UserContext.Provider value={{user,setUser,transactions, getTransactionData}}>
    { children }
</UserContext.Provider>
  )
}

export const useUser =()=>{

   return useContext(UserContext)
} 