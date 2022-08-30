import mongoose from "mongoose"
import express from "express"
import app from "./app"


mongoose.connect(app.get("db")).then((response)=>{if(response){
    app.listen(app.get("port"),()=>{
        console.log("connected to API on port",app.get("port"))
    })}}).catch((error)=>{console.log(error)})
