const mongoose = require('mongoose');
const express  = require('express');
//const Prod     = require('../models/product');
const router = express.Router();
const { check, validationResult } = require('express-validator');



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

const Product = mongoose.model('product ', productSchema);


router.get('/', async(req, res)=>{
    const products = await Product.find();
    
    res.send(products);
});

router.get('/:id', (req, res)=>{
    const id = req.params.id;
    const products = await Product.find({'id': id});

    if(!products) return res.status(200).send({status:false});

    res.status(200).send(products);
})

router.put('/:id',
[
    check('name').isLength({min:2, max:20}),
    check('description').isLength({min:2, max:200}),
    check('model').isLength({min:2, max:10})
],
(req, res)=>{
   
    const errors = validationResult(req);
    var product;

    if(!errors.isEmpty()){
        return res.status(422).send({errors:errors.array()})
    }
 
    product = products.find(product=> product.id === req.params.id);

    product.name = req.body.name;
    product.description = req.body.description;
    product.model = req.body.model;
    
    console.info(products);

    res.status(201).send();

});

module.exports = router;