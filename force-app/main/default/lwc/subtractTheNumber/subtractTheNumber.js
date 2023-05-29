import { LightningElement ,track,api} from 'lwc';

export default class SubtractTheNumber extends LightningElement {
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
    subtraction() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
}