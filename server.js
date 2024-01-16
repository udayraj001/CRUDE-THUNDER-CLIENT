const express=require('express');
const app=express();
const cors=require('cors');
const userRouter=require('./routes/userRoutes.js');
const client=require("./DB/pgres.js");

app.use(cors());
app.use(express.json());
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Server Started!!~");
});




// const express =require express;
