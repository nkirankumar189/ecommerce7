//import the modules

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./model/product");
//import express-async-handler
const express_async_handler = require("express-async-handler");

// where App is the rest object
//where App object used to develop the rest apis ex:GET,PUT,POST,DELETE
const app = express();
//enable the cors policy
app.use(cors());
//set the json as MIME TYPE
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@majorproject.9yrsk.mongodb.net/ecommerce?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err) => {
        if (err) throw err;
        else {
            console.log("connection success");
        }
    });
//create the rest api
app.get("/api/products", express_async_handler(async (req, res) => {
    const product = await Product.find();
    res.send(product);


}))
//create the rest api by using id
app.get("/api/products/:id", express_async_handler(async (req, res) => {
    const product = await Product.findOne(mongoose.Types.ObjectId(req.params.id));
    // if (!product) {
    //     res.status(400).send({ "message": "products not available" })
    // } else {
    //     res.status(200).send(product);
    // }
    res.send(product);
}))

app.listen(8080, () => {
    console.log("server listening the port number 8080")
})