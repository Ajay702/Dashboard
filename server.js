require('dotenv').config();
const express = require('express');
const connectDb = require("./config/dbConnection");
const DataModel = require("./models/DataModel");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); 


connectDb()

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' https://dashboard-server-iota.vercel.app; script-src 'self' 'unsafe-inline'");
  next();
});
app.use(cors());
app.get('/', async (req, res) => {
    const data = await DataModel.find();
    res.json(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
