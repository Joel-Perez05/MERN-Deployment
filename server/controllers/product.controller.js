const Product = require("../models/product.model");

const getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then((singleProduct) => res.json(singleProduct))
        .catch((err) => console.log(err))
}

const getAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => console.log(err))
}

const createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err))
};

const updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => console.log(err))
};

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then((deleteConfirmation) => res.json(deleteConfirmation))
        .catch((err) => console.log(err))
};

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
};