import userSchema from "./UserSchema.js";


//C

export const insertUser=(userObj)=>{
return userSchema(userObj).save()

}