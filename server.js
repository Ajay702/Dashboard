// server.js

require('dotenv').config();
const express = require('express');
const connectDb = require("./config/dbConnection");
const DataModel = require("./models/DataModel");

const app = express();

// Connect to MongoDB
connectDb();

// Define CORS headers (not necessary on Vercel for API routes)
// app.use(cors());

const getData = async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Define API route handler
app.get('/', getData);

// Set up serverless function for Vercel deployment
module.exports = app;
