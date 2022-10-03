require("dotenv").config(); 
const mongoose = require('mongoose') 
const products = require('../data/productos.json') //array object mock data
const router = require('./routes/index') 
const express = require('express') 

const app = express(); 

app.use(express.json()); 
app.use(express.static("public"));

app.use(router); 

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(error);
  });