/**
 * product DAO.js
 */
"use strict";

// const { getProducts } = require("../../Controller/productController");;
const Product = require("../../model/product")
// TODO USE ES6 class syntax

const productDAO = (function(){
    const products=[];
        products.push(new Product(null,1001, "Apple Iphone15",1900));
        products.push(new Product(null,1003, "Samsung Android S22",1500));
        products.push(new Product(null,1004, "Google Pixel 11",1200));
    const getProducts = function(){
        
        return products;
    }
    const getHotDeals = function(){
        const filteredProducts=products.filter(p => p.unitPrice <1000);
        console.log(filteredProducts);
        return filteredProducts;

    }
    // return{
    //     getProducts :getProducts
    // }

/**
 * Fetches and resutrns all available products in the data base */

// const getProducts = async function(){ //async is to run this function asyncronnouslly
//     const qryStrGetProducts = "SELECT * FROM `products-db`.products";
//     try {
//         const dbConnection =dbConnectionMgr.getConnextion();
//         const [products] = await dbConnection.promise().query(qryStrGetProducts);
//         return products; //
//     } catch (err) {
//         console.log(`DB Access Error: ${err}`);
//         throw err;
//     }
// };
const saveProducts = function(product){

   //products.push(new Product(null,1001, "Apple Iphone15",1900));
    products.push(new Product(null, product.productNo, product.productName, product.unitPrice));
}
return {
    getProducts:getProducts,
    saveProducts:saveProducts,
    getHotDeals:getHotDeals
}
}) ();
module.exports = productDAO;