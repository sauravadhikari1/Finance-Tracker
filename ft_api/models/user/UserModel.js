import UserSchema from "./UserSchema.js";
import userSchema from "./UserSchema.js";


//C

export const insertUser=(userObj)=>{
return userSchema(userObj).save()

}
export const getUserByEmail=email=>{
    return UserSchema.findOne({email})
}