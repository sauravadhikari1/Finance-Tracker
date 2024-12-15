import mongoose from 'mongoose'

const transactionSchema=mongoose.Schema(
    {
        type:{
            type:String,
            required:true,
            // ref:"User"
        },
        title:{
            type:String,
            required:true,
            // ref:"User"
        },
        amount:{
            type:Number,
            required:true,
            // ref:"User"
        },
        tDate:{
            type:Date,
            required:true,
            // ref:"User"
        },
        userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true

        }
    
    
},{
    timestamps:true,
})
export default mongoose.model("Transaction",transactionSchema)//