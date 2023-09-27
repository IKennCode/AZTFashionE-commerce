import express from "express";
import {isAdmin, requireSignin} from "./../middleware/authMiddleware.js"
import { createCategoryController,categoryControlller,singleCategoryController,updateCategoryController,deleteCategoryCOntroller, } from "../controllers/categoryController.js";


const router = express.Router()

//routes
router.post('/create-category', requireSignin, isAdmin, createCategoryController)

//update category
router.put(
    "/update-category/:id",
    requireSignin,
    isAdmin,
    updateCategoryController
  );
  
  //getALl category
  router.get("/get-category", categoryControlller);
  
  //single category
  router.get("/single-category/:slug", singleCategoryController);
  
  //delete category
  router.delete("/delete-category/:id",requireSignin,isAdmin,deleteCategoryCOntroller);

  export default router;