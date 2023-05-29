import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

 import FIRST_NAME from '@salesforce/schema/Lead.FirstName';
 import LAST_NAME from '@salesforce/schema/Lead.LastName';
 import COMPANY from '@salesforce/schema/Lead.Company';
 import PHONE from '@salesforce/schema/Lead.Phone';
 import EMAIL from '@salesforce/schema/Lead.Email';
 
 export default class CreateLeadRecord extends LightningElement {
     leadFirstName = FIRST_NAME;
     leadLastName = LAST_NAME;
     leadComapny = COMPANY;
     leadPhone = PHONE;
     leadEmail =EMAIL;
     
     handleSuccess(){
         if(this.recordId !== null){
             this.dispatchEvent(new ShowToastEvent({
                     title: "SUCCESS!",
                     message: "New record has been created.",
                    variant: "success",
                 }),  
            );    
          }
     } }