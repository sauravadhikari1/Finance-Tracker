import express from 'express'
// import { insertTransaction } from '../models/transaction/TransactionModel'
// import { insertData } from "../models/transaction/TransactionModel.js";
import { deleteTransactions, getTransactions, insertTransaction } from '../models/transaction/TransactionModel.js';

const router = express.Router()
// insert transaction
router.post("/", async(req,res,next)=>{
    try {
        // console.log(req.body)
        const {_id}=req.userInfo
        req.body.userID=_id
        const result = await insertTransaction(req.body)
        result?._id?
        res.json({
            status:"success",
            message:"Transaction is inserted successfully"
        }
        ):
        res.json({
            status:"error",
            message:"unable to add new transaction try again later"
        }
        )

    } catch (error) {
        console.log (error)
    }
});


///get transactions for the specific users
router.get("/",async(req,res,next)=>{
    try {
    // get all transactions
    const {_id} =req.userInfo
    const transactions= await getTransactions(_id) 
    
    res.json({
        status:"success",
        message:"here is your transactions",
        transactions
    })
    } catch (error) {
        console.log(error)
        res.json({
            status:"error",
            message:error.message
        })
    }
})

router.delete("/",async (req,res)=>{
    try {
    // get all transactions
    const tranid =req.body.tranid
    const {_id}=req.userInfo
    const result =await deleteTransactions(_id, tranid)
    
    res.json({
        status:"success",
        message:result,
        
    })
    } catch (error) {
        console.log(error)
        res.json({
            status:"error",
            message:error.message
        })
    }
})






export default router;