//const express = require('express');
//const colors = require('colors');

import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//configure env
dotenv.config()

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
    res.send('<h1>Welcome to IKennCode</h1>');
});

// declare PORT
//this will create a localhost:8080 that will load a message from app.get
const PORT = process.env.PORT || 8080;

//run Listen
//used back tick(``)
app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgWhite.black);
});