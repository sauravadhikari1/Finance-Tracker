import Transactions from "./TransactionModel.js"

export const insertData=(TransactionObj)=>{
    return Transactions(TransactionObj).save()
    }

export const getTransactionByID=id=>{
    return UserSchema.findOne({id})
    }


