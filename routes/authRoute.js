import express from "express";
import {registerController, loginController} from "../controllers/authController.js";


//router object 
const router = express.Router()

//routing
//REGISTER ||(or) METHOD POST
router.post('/register', registerController)


//LOGIN ||(or) POST
router.post('/login', loginController)

export default router;