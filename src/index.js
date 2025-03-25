//require('dotenv').config()
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})


connectDB()
.then( () => {
    app.on("error", (error) => {
        console.log("error connecting to MongoDB !!@!", error);
        throw err;
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
})
.catch( (error) => {
    console.log("MongoDB connection failed !!!", error);
})


/*
import express from "express";
const app = express();

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
        app.on("error", (error) => {
            console.log("error connecting to MongoDB", error);
            throw err;
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error(error);
        throw err;
    }
})()
*/