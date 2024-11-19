import express from "express"
const app=express()
const PORT =process.env.PORT || 8000
//connec to the data base
import {conMongoDb} from "./config/mongodbConfig.js"
conMongoDb()

//API endpoints
app.use(express.json())

import userRouter from "./routers/userRouter.js"
app.use("/api/v1/users", userRouter)



app.get("/",(req,res)=>{
    res.json({
        message:"server is running "
    })
})

app.listen(PORT,error=>{
    error?console.log(error):
    console.log(`server is running at http://localhost:${PORT}`)
});