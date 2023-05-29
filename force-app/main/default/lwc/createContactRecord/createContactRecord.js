import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
 import LAST_NAME from '@salesforce/schema/Contact.LastName';
 import PHONE from '@salesforce/schema/Contact.Phone';
 import EMAIL from '@salesforce/schema/Contact.Email';
export default class createContactRecord extends LightningElement {
    contactFirstName = FIRST_NAME;
    contactLastName = LAST_NAME;
    contactPhone = PHONE;
    contactEmail =EMAIL;
     
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