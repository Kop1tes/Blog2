import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';


const app = express()
dotenv.config()

//Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

//Middleware


async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.0jmxa7f.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )

        app.listen(3000, ()=>console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()