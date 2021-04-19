'use strict'

const mongoose = require("mongoose");

var uri = "mongodb+srv://Nikhil:Nikhil510@cluster0.tz1ep.mongodb.net/User-Cart-Microservices?retryWrites=true&w=majority";

const options = {
    useNewUrlParser:  true,
    useFindAndModify: false,
    useUnifiedTopology:  true,
};

mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
}, 
err => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});

const express = require("express");

const app = express();

var routes = require('./api/routes/routes');

const port = process.env.PORT || 4000;

app.use(express.json());

routes(app);

app.get('/', (req, res) => {
    res.send("User Cart Microservice. Check Readme file for usage");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
