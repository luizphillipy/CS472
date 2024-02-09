/**
 * 
 */
//import { greeting } from "./modules/greeting.mjs";
import { Account } from "./js/bankingappmodule/modules/account.js";

// const greet = function(name){
//     console.log(`${greeting} ${name}`);
// }
// greet("anna");

const accounts = [
    new Account("A0001","Faycal", 100.00),
    new Account ("A002", "Asma IOS", 120.00),
    new Account("A003","Luiz Sampaio", 10000.00)
];
accounts.forEach(a=> console.log(a));