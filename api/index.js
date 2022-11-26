
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
 

import authRoute from "../routes/auth.mjs";
import usersRoute from "../routes/users.mjs";
import hotelsRoute from "../routes/hotels.mjs";
import roomsRoute from "../routes/rooms.mjs";
const app=express()
dotenv.config(); 

 
const connect=async()=>{try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};


mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

app.use(express.json())



app.use("auth",authRoute);
app.use("api/users",usersRoute);
app.use("api/hotels",hotelsRoute);
app.use("api/rooms",roomsRoute);

app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend!")

})
