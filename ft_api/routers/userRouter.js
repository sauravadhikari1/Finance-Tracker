import express from "express";
import { insertUser } from "../models/user/UserModel.js";
const router=express.Router()
//User signup

router.post("/",async (req,res,next)=>{
try {
    //
    //
    const user = await insertUser(req.body)
    ///
    console.log(req.body)
    user?._id?
    res.json({
        status:"success",
        message:"your account has been created you may login now",
    }):
    res.json({
        status:"error",
        message:"Error creating user. Please try again later",
    })

} catch (error) {
    res.json({
        status:"error",
        message:error.message
    })
}
})


export default router;