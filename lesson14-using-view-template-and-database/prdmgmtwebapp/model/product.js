/**
 * product.js
 */
"use strict"

//todo: use ES6 class syntax

function Product(productId, productNo, productName, unitPrice){
    this.productNo=productNo;
    this.productName=productName;
    this.unitPrice = unitPrice;
    this.productId = productId;
}
module.exports = Product;