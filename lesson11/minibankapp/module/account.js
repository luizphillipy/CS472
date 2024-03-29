/**
 * 
 * Account.js
 * @author Luiz Sampaio
 * @since 2022-03-10
 */
"use strict"
export class Account {
    #accountNo = null;
    #customerName = null;
    #accountType = null;

    constructor(accountNo, customerName, accoutType){
        this.#accountNo = accountNo;
        this.#customerName=customerName;
        this.#accountType=accoutType;

    }
    getAccountNo(){return this.#accountNo};
    getCustomerName(){return this.#customerName};
    getAccountType(){return this.#accountType};

    setAccountNo(accountNo){
        this.#accountNo=accountNo;
    }
    setCustomerName(customerName){
        this.#customerName=customerName;
    }
    setAccountType(accountType){
        this.#accountType = accountType;
    }
    toString(){
        return `{AccountNo: ${this.#accountNo}, CustomerName: ${this.#customerName}, AccountType: ${this.accountType}}`
    }

}