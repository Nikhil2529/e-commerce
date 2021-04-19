const Product = require("../models/model");

exports.displayProducts = async (req, res) => { 
    await Product.find({}, (err, product) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(product);
    });
};

exports.createProduct = async (req, res) => {
    let newProduct = new Product (req.body);
    await newProduct.save ((err, product) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(product);
    });
};

exports.updateProduct = async (req, res) => {
    await Product.findOneAndUpdate({ productId: req.params.id }, req.body, { new: true }, (err, product) => {
    if (err) {
        res.status(500).send(err);
    }
        res.status(200).json(product);
    });
};    

exports.deleteProduct = async (req, res) => {
    await Product.deleteOne({ productId: req.params.id }, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message: "Product successfully deleted."});
    });
};
