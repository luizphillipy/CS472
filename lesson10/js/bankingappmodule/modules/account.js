/**
 * 
 * acount.js
 */
export class Account {
    constructor(accountNo, customerName, balance){
        this.accountNo = accountNo;
        this.customerName=customerName;
        this.balance=balance
    }
    get accountNo(){return this._accountNo};
    get custumerName() {return this._customerName};
    get balance(){return this._balance};
    set accountNo(value) {
        this._accountNo = value;
    }
    set customerName(value){
        this._customerName = value;
    }
    set balance(value){
        this._balance=value;
    }
}