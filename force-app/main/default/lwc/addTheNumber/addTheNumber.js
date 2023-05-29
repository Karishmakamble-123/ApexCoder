import { LightningElement, track,api } from 'lwc';

export default class AddTheNumber extends LightningElement {

    @track firstNumber;
    @track secondNumber;
    resultValue;
    handleNumberOne(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwo(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    @api
    addition() {
        this.resultValue = this.firstNumber +  this.secondNumber;
    }
}