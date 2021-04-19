'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema ({
    productId: {
        type: String,
        default: ' ',
        required: true,
    },
    productName: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Negative quantity isn't real.");
        }
    },
    amount: {
        type: Number,
        validate(value) {
            if (value < 0) throw new Error("Negative amount isn't real.");
        }
    }
}, 
{ 
    _id : false 
});

const UserCartSchema = new Schema ({
    userId: {
        type: String,
        required: true,
        index: { 
            unique: true 
        }
    },
    cart: [CartSchema]
});

module.exports = mongoose.model("model", UserCartSchema);
