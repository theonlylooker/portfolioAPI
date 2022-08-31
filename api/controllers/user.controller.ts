import { Handler } from "express";
import jwt from "jsonwebtoken"
import User from "../models/user.model"

interface payload{
    name:string,
}
const generateToken = (user:payload) => {
    return jwt.sign(user,process.env.SECRET as string,{expiresIn:'3d'});
}

export const loginUser:Handler = async(req,res) => {
    const {name,password} = req.body
    try {
        const user = await User.login(name,password);
        const token = generateToken({name:user.name})
        res.status(200).json({name,token})
    } catch (error) {
        const a = error as Error;
        console.log(a)
        res.status(400).json({msg:a.message})
    }   
}

