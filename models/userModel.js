import mongoose from "mongoose";

//this userModel.js will communicate to the mongoDB users schema
// I already created a database with a user folder that will handle all the data inside of it.

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
    },
    role:{
        type:Number,
        default:0,
        
    },

},
{timestamps:true}
);

export default mongoose.model("users" ,userSchema);