import mongoose from 'mongoose'

const transactionSchema=mongoose.Schema({
    userID:{
        type:String,
        required:true,
        // ref:"User"
    },
    amount:{
        type:Number,
        index:1,
        required:true,

    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date
    }
    
    
},{
    timestamps:true,
})
export default mongoose.model("Transactions",transactionSchema)//