/**
 * product.js
 */
"use strict"
const express =require("express");
const productController = require("../../Controller/productController");
const productAPIRouter = express.Router();

productAPIRouter.get("/product/list",async(req, res)=>{
    const products = productController.getProducts(req,res);
    res.json(products);
});

module.exports = productAPIRouter;
