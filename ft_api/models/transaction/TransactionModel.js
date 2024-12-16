import TransactionSchema from "./TransactionSchema.js"

export const insertTransaction=(obj)=>{
    return TransactionSchema(obj).save()
    }

// export const getTransactionByID=id=>{
//     return UserSchema.findOne({id})
//     }

export const getTransactions=(userID)=>{
    if(!userID){
        throw new Error("userId is required")
    }
    return TransactionSchema.find({userID})
}
export const deleteTransactions=(userID,tranid)=>{
    if(!userID){
        throw new Error("userId is required")
    }
    return TransactionSchema.deleteOne({tranid})
}