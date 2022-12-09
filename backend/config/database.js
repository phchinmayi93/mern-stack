// Connect to mongoose in nodejs?

const mongoose = require('mongoose');
// const express = require('express');
// var cors = require('cors');
// const bodyParser = require('body-parser');
// const product = require('./routes/product.route'); // Imports routes for the products

// const API_PORT = 3000;
// const app = express();

// app.use(cors());


// // Set up mongoose connection on mongoAtlas
// //https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
// const dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';

// connects our back end code with the database

const  connectDatabase =()=>{
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true}).then((data)=>{
        console.log(`Mongodb connected with server data :${data.connection.host}`);
    })
}

module.exports = connectDatabase;

// let db = mongoose.connection;

// db.once('open', () => console.log('connected to the database'));

// // checks if connection with the database is successful
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// // append /api for our http requests
// app.use('/product', product);

// // launch our backend into a port
// app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));





