const express = require('express');
const colors = require('colors');

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
    res.send({
        message:'Welcome to Ecommerce App',
    });
});

// declare PORT
const PORT = 8080;

//run Listen
//used back tick(``)
app.listen(PORT, () => {
    console.log(`Server Running On ${PORT}`.bgWhite.black);
});