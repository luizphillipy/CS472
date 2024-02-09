/**
 * productController.js
 */
"use strict";

const productDAO = require("../DB/dao/productDAO");
const Product = require("../model/product");
const product = require("../model/product")

const productController = (function(){

    const getProducts = async function(req,res) {
        try {
            const products = await productDAO.getProducts();
            console.log(`Controller: Product list: ${products}`);
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    };

    const addNewProduct = async function(req, res){
        const product = new Product(null, parseInt(req.body.productNo), req.body.productName, parseFloat(req.body.unitPrice));
        try {
            const opRes = await productDAO.saveProducts(product);
            console.log(`ProductController: Save Product output: ${opRes}`)
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x",{error:error})
        }
    }
    return {
        getProducts: getProducts,
        addNewProduct:addNewProduct
    }
})();
module.exports = productController;