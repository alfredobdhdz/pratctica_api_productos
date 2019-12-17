const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 20
    },
    description: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 200
    },
    model: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 10
    },
    price: {
        type: Number,
    }
    
});

const Product = mongoose.model('product', productSchema);

module.exports.Product = Product;