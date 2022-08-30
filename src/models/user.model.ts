import mongoose, { Schema,Document,Model } from "mongoose";
//import bcrypt from "bcrypt"
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{statics:{
    async login(name,password){
        if(!name || !password){
            throw Error("fill all camps");
        }
        const user = await this.findOne({name});
        if(!user){
            throw Error("there is no such user");
        }
        const match = await bcrypt.compare(password,user.password);
        if(!match){
            throw Error("Wrong Password");
        }
        return user    
    }
}})

const User = mongoose.model("User",userSchema);

export default User;