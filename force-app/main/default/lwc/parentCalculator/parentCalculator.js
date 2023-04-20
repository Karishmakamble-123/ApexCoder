import { LightningElement } from 'lwc';

export default class ParentCalculator extends LightningElement {
    
    
addition() {
this.template.querySelector('c-child-calculator').addition();
}

subtraction() {
this.template.querySelector('c-child-calculator').subtraction();
}

multiplication() {
this.template.querySelector('c-child-calculator').multiplication();
}

division() {
this.template.querySelector('c-child-calculator').division();
}
}