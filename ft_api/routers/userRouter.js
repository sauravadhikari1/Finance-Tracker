import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcryptjs.js";
import { signJWT } from "../utils/jwt.js";
import { auth } from "../middlewares/authMiddleware.js";
const router=express.Router()
//User signup

router.post("/",async (req,res,next)=>{
try {
    //encrypt the password
    req.body.password=hashPassword(req.body.password)
    console.log(req.body.password)
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


router.post("/login", async (req,res,next)=>{
    try {
        const {email,password}=req.body
        if(email&&password){
            const user= await getUserByEmail(email)
            if(user?._id){
                const isMatched=comparePassword(password,user.password)
                user.password=undefined
                if(isMatched){
                    // create jwt token
                    const accessJWT=signJWT({
                        email:email
                    })
                    res.json({
                        status:"success",
                        message:"log in successful",
                        user,
                        accessJWT
                    })
                    return
                }
            }
        }
        res.status(401).json({
            error:"invalid credentials"
        })
        // console.log(email,password)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
})



router.get("/",auth,(req,res,next)=>{
    try {
        const user=req.userInfo



        res.json({
            status:"success",
            message:"here is your user",
            user
        })

        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
})

export default router;