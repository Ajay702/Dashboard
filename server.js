require('dotenv').config();
const express = require('express');
const connectDb = require("./config/dbConnection");
const DataModel = require("./models/DataModel");
const cors = require('cors');

const app = express();


app.use(cors());


connectDb();


app.get('/', async (req, res) => {
    res.json({"message":"successful"})
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
