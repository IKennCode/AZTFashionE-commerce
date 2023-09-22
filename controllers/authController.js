import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


//Registering Users
export const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;

        //validations
        if(!name){
            return res.send({message:"Name is required"})
        }
        if(!email){
            return res.send({message:"Email is required"})
        }
        if(!password){
            return res.send({message:"Password is required"})
        }
        if(!phone){
            return res.send({message:"Phone is required"})
        }
        if(!address){
            return res.send({message:"Address is required"})
        }

        //check user if already stored in database
        const existingUser = await userModel.findOne({email})
        //if there is existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"Already Register please login",
            })
        }

        //register User
        const hashedPassword = await hashPassword(password)

        //save user
        //add "await" before "new" to see the result in postman POST result
        // const user = new userModel({name, email, phone, address, password:hashedPassword}).save()
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save()

        //this one will appear on postman post request or in local storage or MONGODB
        res.status(201).send({
            success: true,
            message: "User Register Successfully!",
            user,
        });
    }catch (error) {
        console.log (error)
        res.status(500).send ({
            success:false,
            message: "Error in Registration",
            error
        })
    }

};


//this will be the POST LOGIN
export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        //validation here
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid Email or password"
            })
        }

        //check the user Email and Password
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        //Token 
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success:true,
            message: "Login Successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });



    }catch (error) {
        console.log(error)
        res.status(500).send ({
            success:false,
            message:"Error in Login",
            error
        })
    }
 
};

//test Controller
export const userController = (req, res) => {
    res.send("Protected Route");
};



