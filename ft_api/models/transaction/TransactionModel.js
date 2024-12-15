import TransactionSchema from "./TransactionSchema.js"

export const insertTransaction=(obj)=>{
    return TransactionSchema(obj).save()
    }

// export const getTransactionByID=id=>{
//     return UserSchema.findOne({id})
//     }


