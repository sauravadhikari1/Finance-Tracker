import { getUserByEmail } from "../models/user/UserModel.js"
import { verifyJWT } from "../utils/jwt.js"
export const auth = async (req,res,next) => {
  try {
    const {authorization}=req.headers
    const result =verifyJWT(authorization)
    if(result?.email){
        const user = await getUserByEmail(result.email)
        if(user?._id){
            //user is authorized
            req.userInfo=user;
           return next()
        }
    }
    console.log(result)
    const isAuth=false
    isAuth? next()
    :res.status(403).json({
        error:"Unauthorized",
    })
  } catch (error) {
    res.status(500).json({
        error:error.message
    })
  }
}
