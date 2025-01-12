// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());    //Middleware to accept JSON data in req.body


app.use("/api/products", productRoutes);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});


// W6gnFqDv37faobBF