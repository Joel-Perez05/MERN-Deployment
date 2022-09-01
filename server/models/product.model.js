const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Title is required!"]
    },
    price: {
        type: Number,
        required: [true, "Product Price is required!"]
    }, 
    description: {
        type: String,
        required: [true, "Product Description is required!"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);