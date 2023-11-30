import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//This code for protected Routes token base 

//this auth is for normal user
export const requireSignin = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        //pass user
        //this one is for user token to read user id
        req.user = decode;
        next();
    }catch (error) {
        console.log(error);
    }
};

//this auth is for admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        //check user
        //"!==" means not equivalent to 1 (1 means admin 0 is for users only role)
        if(user.role !== 1) {
            return res.status(401).send ({
                success:false,
                message:"Unauthorized Access"
            });
        }else {
            next();
        }
    }catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:"error in middleware"
        })
    }
}