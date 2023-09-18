import mongoose from "mongoose"; 
import colors from "colors";

//created a connectDB variable to store a connection between express to mongodb 
//checking if the mongoDB are connected successfully or not called from .env file.

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgGreen.black);

    }catch(error) {
        console.log(`Error in Mongodb ${error}`.bgMagenta.white);
    }
}

export default connectDB;   
