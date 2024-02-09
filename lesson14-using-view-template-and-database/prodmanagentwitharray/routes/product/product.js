/**
 * product.js
 */
"use strict"

const express = require("express");
const path = require("path");

const productRouter = express.Router();
const productRouterForm = express.Router();
//const product = require("../../model/product");
const productController = require("../../Controller/productController");

//define routes for product pages

productRouter.get("/list", async(req, res, next)=>{
    console.log(`Presenting list of products page...`);
    const products = await productController.getProducts(req, res);
    console.log(products);
    res.locals = {products:products};
    res.render("product-list");
    //res.sendFile(path.join(__dirname,"../../views","product-list.html"))
});

productRouter.get("/new", (req, res)=>{
    res.sendFile(path.join(__dirname, "../../views/","product-form.html"))
});
productRouter.post("/new", async (req, res)=>{
    const result = await productController.addNewProduct(req, res);
    res.redirect(303,"/product/list")
});
// productRouter.get("/form", (req, res, next)=>{
    
// })
productRouter.get("/hotdeals", (req, res, next)=>{
    console.log(`Presenting list of products page...`);
    const products = productController.getHotDeals(req, res);
    console.log(products);
    res.locals = {products:products};
    res.render("product-list");
    //res.sendFile(path.join(__dirname,"../../views","product-list.html"))
});

module.exports = productRouter;