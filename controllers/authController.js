import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";


//Registering Users
export const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;

        //validations
        if(!name){
            return res.send({error:"Name is required"})
        }
        if(!email){
            return res.send({error:"Email is required"})
        }
        if(!password){
            return res.send({error:"Password is required"})
        }
        if(!phone){
            return res.send({error:"Phone is required"})
        }
        if(!address){
            return res.send({error:"Address is required"})
        }

        //check user if already stored in database
        const existingUser = await userModel.findOne({email})
        //if there is existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"Already Register please login",
            })
        }

        //register User
        const hashedPassword = await hashPassword(password)

        //save user
        //add "await" before "new" to see the result in postman POST result
        // const user = new userModel({name, email, phone, address, password:hashedPassword}).save()
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save()

        //this one will appear on postman post request
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



