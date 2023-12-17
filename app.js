const express  = require('express');

const mongoose = require('mongoose');

const router = require('./routes/book-routes.js');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Bookstore_Project').then(()=> {console.log("Connected to database")}).then(() => {
    app.listen(5000);
}).catch((err) => {console.log(err)});


app.use(express.json());
app.use("/books", router);

