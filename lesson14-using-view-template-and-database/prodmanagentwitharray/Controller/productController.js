/**
 * productController.js
 */
"use strict";

const productDAO = require("../DB/dao/productDAO");

const Product = require("../model/product")

const productController = (function(){

    const getProducts = function(req,res) {
        try {
            const products = productDAO.getProducts();
            console.log(`Controller: Product list: ${products}`);
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    };
    const getHotDeals = function(req,res) {
        try {
            const products = productDAO.getHotDeals();
            console.log(`Controller: Product list: ${products}`);
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    };
    const addNewProduct = function(req, res){
        const product = new Product(null, parseInt(req.body.productNo), req.body.productName, parseFloat(req.body.unitPrice));
        try {
            const opRes = productDAO.saveProducts(product);
            console.log(`ProductController: Save Product output: ${opRes}`)
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x",{error:error})
        }
    }
    return {
        getProducts: getProducts,
        addNewProduct:addNewProduct,
        getHotDeals:getHotDeals
    }
})();
module.exports = productController;