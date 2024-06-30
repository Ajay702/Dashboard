require('dotenv').config();
const express = require('express');
const connectDb = require("./config/dbConnection");
const DataModel = require("./models/DataModel");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); 


connectDb();


app.use(cors());


const getData = async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

app.get('/', getData);

// Set up server to listen on specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
