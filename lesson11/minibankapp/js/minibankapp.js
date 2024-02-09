/**
 * miniBankApp.js using 
 * @author Luiz Sampaio
 * @since 2022-03-10
 */

"use strict"
import {Account} from "../module/account.js";
console.log("hello minibanker!!");
//Avoid polluting the global Environment
//Method 1: use the defer on html to defer the loading of the script
// (function () {
//     console.log("Wrapper minibank module loaded!!");
//     const formNewAccount = document.getElementById("formNewAccount");
//     formNewAccount.addEventListener("submit", createAccount);
//     function createAccount(){
//         console.log("Account Created!")
//     }
// }) ();
// //Method 2: using  Window.onload
// Window.onload = function () {
//     console.log("window.onload !!");
//     const formNewAccount = document.getElementById("formNewAccount");
//     formNewAccount.addEventListener("submit", createAccount);
//     function createAccount(){
//         console.log("Account Created!")
//     }
// }
//Method 3: using JQuery
$(document).ready(function() {
    console.log("minibankapp module loaded via JQuery")
    const accountsData = [];
    $("#formNewAccount").submit(function(event){
        event.preventDefault();
        const accountNo = $("#txtAccountNo").val();
        const customerName = $("#txtCustomerName").val();
        const accountType = $("#ddlAccountType").val();
       // const accountData = `Account No: ${accountNo}\nCustomer Name: ${customerName}\nAccount Type: ${accountType}`;
      //  alert(accountData);
      const newAccount = new Account(accountNo, customerName, accountType)
      accountsData.push(newAccount);
      createAccount(newAccount,accountsData.length);
      

    })
    function createAccount(newAccount,numAccounts){
        
        const tblAccounts = document.querySelector("#tblAccounts");
        const newRow = tblAccounts.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const nextRowId = numAccounts +2;
        const strNewRowId = document.createTextNode(`${nextRowId}.`);
        newCellRowId.appendChild(strNewRowId); // a 

        const newCellAccountNo = newRow.insertCell(1);
        const srtNewRowAccountNo = document.createTextNode(`${newAccount.getAccountNo()}`);
        newCellAccountNo.appendChild(srtNewRowAccountNo);

        const newCellCustomerName = newRow.insertCell(2);
        const srtNewRowCustomerName = document.createTextNode(`${newAccount.getCustomerName()}`);
        newCellCustomerName.appendChild(srtNewRowCustomerName);

        const newCellAccountType = newRow.insertCell(3);
        const srtNewRowAccountType = document.createTextNode(`${newAccount.getAccountType()}`);
        newCellAccountType.appendChild(srtNewRowAccountType);
        
        
    }

})