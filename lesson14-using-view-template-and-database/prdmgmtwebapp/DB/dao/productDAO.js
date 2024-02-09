/**
 * product DAO.js
 */
"use strict";
const { get } = require("../../routes/product/product");
// const { getProducts } = require("../../Controller/productController");
const dbConnectionMgr = require("../dao/dbconnectionmgr");
//const Product = require("../../model/product")
// TODO USE ES6 class syntax

const productDAO = (function(){
//     const getProducts = function(){
//         const products=[];
//         products.push(new Product(1001, "Apple Iphone15",1700));
//         products.push(new Product(1003, "Samsung Android S22",1500));
//         products.push(new Product(1004, "Google Pixel 11",1200));
//         return products;
//     }
//     return{
//         getProducts :getProducts
//     }

/**
 * Fetches and resutrns all available products in the data base */

const getProducts = async function(){ //async is to run this function asyncronnouslly
    const qryStrGetProducts = "SELECT * FROM `products-db`.products";
    try {
        const dbConnection =dbConnectionMgr.getConnextion();
        const [products] = await dbConnection.promise().query(qryStrGetProducts);
        return products; //
    } catch (err) {
        console.log(`DB Access Error: ${err}`);
        throw err;
    }
};
const saveProducts = async function(product){
    const cmdStrSaveProduct = `insert into products (productNo, productName, unitPrice) values (${product.productNo}, '${product.productName}',${product.unitPrice})`;
    try {
        const dbConnection = dbConnectionMgr.getConnextion();
        const saveOpResult = await dbConnection.promise().execute(cmdStrSaveProduct);
        return saveOpResult;
    } catch (error) {
        console.log(`DB Access Error: ${error}`);
        throw error
        
    }
}
return {
    getProducts:getProducts,
    saveProducts:saveProducts
}
}) ();
module.exports = productDAO;