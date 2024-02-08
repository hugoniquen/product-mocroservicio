const express = require('express');
const ProductService = require('../services/ProductService');

const router = express.Router();
const productService = new ProductService();

router.get('/', async(req, res)=>{
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', async(req, res)=>{
    try {
        const product = await productService.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', async(req, res)=>{
    try {
        const newProductId = await productService.addProduct(req.body);
        res.status(201).send({id: newProductId});
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id', async(req, res)=>{
    try {
        await productService.updateProduct(req.params.id, req.body);
        res.json({message: 'Product actualizado'});
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', async(req, res)=>{
    try {
        await productService.deletProduct(req.params.id);
        res.json({message: 'Product eliminado'});
    } catch (error) {
        res.status(500).send(error.message);
    }
});