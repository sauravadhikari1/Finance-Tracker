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

export const deleteTransactions = async (userID, transactionID) => {
    if (!userID || !transactionID) {
      throw new Error("Both userID and transactionID are required");
    }
  
    try {
      const result = await TransactionSchema.deleteOne({
        userID, // Match the user ID
        _id: transactionID, // Match the transaction ID
      });
  
      if (result.deletedCount === 0) {
        return { status: "error", message: "Transaction not found or already deleted" };
      }
  
      return { status: "success", message: "Transaction deleted successfully" };
    } catch (error) {
      throw new Error(`Failed to delete transaction: ${error.message}`);
    }
  };
  