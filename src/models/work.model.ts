import mongoose, { Schema } from "mongoose";

const workSchema = new Schema({
    name:{
        required:true,
        type: String,
    },
    link:{
        required:true,
        type: String,
    },
    demo:{
        required:false,
        type:String
    },
    description:{
        required:true,
        type: String,
    },
    type:{
        required:true,
        type:String,
        enum: ['FRONTEND','BACKEND'],
    },
    image:{
        required:true,
        type:String,
    }
    // userId:{
    //     required:true,
    //     type: String,
    // }
},{timestamps:true})

const Work = mongoose.model("Work",workSchema);
export default Work;