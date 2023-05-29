import { LightningElement ,track,api} from 'lwc';

export default class DivisionOfNumber extends LightningElement {
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
    division() {
        this.resultValue = this.firstNumber / this.secondNumber;
    }
}