import { LightningElement } from 'lwc';

export default class ParentCalculator extends LightningElement {

    addition() {
        this.template.querySelector('c-add-the-number').addition();
        }
        
        subtraction() {
        this.template.querySelector('c-subtract-the-number').subtraction();
        }
        
        multiplication() {
        this.template.querySelector('c-multiplication-of-the-no').multiplication();
        }
        
        division() {
        this.template.querySelector('c-division-of-number').division();
        }
        }
