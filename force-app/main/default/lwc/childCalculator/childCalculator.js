
import { LightningElement,api,track} from 'lwc';

export default class ChildCalculator extends LightningElement {

    @track firstNumber;
    @track secondNumber;
     resultValue1;
     resultValue2;
     resultValue3;
     resultValue4;
    


     handleClickone(event){
      this.firstNumber = parseInt(event.target.value);
  }
  handleClicktwo(event){
      this.secondNumber = parseInt(event.target.value);
      
  }
  @api
  addition(){
    
    this.resultValue1 = this.firstNumber +  this.secondNumber;
  }
  @api
  subtraction() {
    this.resultValue2 = this.firstNumber - this.secondNumber;
  }
  @api
  multiplication(){
  this.resultValue3 = this.firstNumber * this.secondNumber;
  }
  @api
  division() {
  this.resultValue4 = this.firstNumber / this.secondNumber;
}
}



