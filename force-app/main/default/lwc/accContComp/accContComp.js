import { LightningElement,api,track} from 'lwc';
// import server side apex class method 
import getAccountData from '@salesforce/apex/AccContController.getAccountData';
// import standard toast event 
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class accContComp extends LightningElement {
   
      listAccount;
      isError=false;
      isCreateContact=false;
      @api
      label = "";
      searchKey;
      @track accounts;

      handelSearchKey(event){
        this.searchKey = event.target.value;
    }
    //This funcation will fetch the Account Name on basis of searchkey
    getAccount(){
      //call Apex method.
      getAccountData({textkey: this.searchKey})
      .then(result => {
              this.accounts = result;
              
      })
      .catch( error=>{
          this.accounts = null;
          this.isError=true;
      });
    }
     createContact(){
        this.isCreateContact=true;
     }
    
     handleSuccess(event){
        
            // Creates the event with the contact ID data.
            const selectedEvent = new CustomEvent('contactcreated', { detail: event.detail.Name });
            // Dispatches the event.
            this.dispatchEvent(selectedEvent);
            const evt = new ShowToastEvent({
                title: 'SUCCESS',
                message: 'Contact Created Succesfully',
                variant:'success',
            });
            this.dispatchEvent(evt);
      }
}