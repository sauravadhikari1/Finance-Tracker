import express from 'express'
// import { insertTransaction } from '../models/transaction/TransactionModel'
// import { insertData } from "../models/transaction/TransactionModel.js";
import { insertTransaction } from '../models/transaction/TransactionModel.js';

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





export default router;