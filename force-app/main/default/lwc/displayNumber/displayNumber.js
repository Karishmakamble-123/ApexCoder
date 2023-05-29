import { LightningElement } from 'lwc';

export default class DisplayNumber extends LightningElement {
    
       i = 0
       result=0

     handleClick() {
        this.i = this.i+2
      
     }
        
    }