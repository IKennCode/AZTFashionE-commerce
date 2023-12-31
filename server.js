
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoute.js";



//configure env
dotenv.config();

//database config(configuration)
connectDB();

//REST object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.use("*", function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// declare PORT
//this will create a localhost:8080 that will load a message 
const PORT = process.env.PORT || 8080;

//run Listen
//used back tick(``)
app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgWhite.black);
});