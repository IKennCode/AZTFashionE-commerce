import express from "express";
import {registerController, loginController, userController, forgotPasswordController} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middleware/authMiddleware.js";



//router object 
const router = express.Router()

//routing
//REGISTER ||(or) METHOD POST
router.post('/register', registerController)

//LOGIN ||(or) POST
router.post('/login', loginController)

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController); 

//protected user route auth
router.get("/user-auth", requireSignin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //protected Admin route auth
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//test routes
router.get('/user' , requireSignin, isAdmin, userController)

export default router;