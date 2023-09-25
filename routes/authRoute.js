import express from "express";
import {registerController, loginController, userController, forgotPasswordController} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middleware/authMIddleware.js";



//router object 
const router = express.Router()

//routing
//REGISTER ||(or) METHOD POST
router.post('/register', registerController)

//LOGIN ||(or) POST
router.post('/login', loginController)

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController); 

//test routes
router.get('/user' , requireSignin, isAdmin, userController)

export default router;