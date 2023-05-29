import { LightningElement ,wire,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getSplitBillRecords from '@salesforce/apex/ListOfSplitBillRecord.getSplitBillRecords';
import portionSplit from '@salesforce/apex/PortionSplitClass.portionSplit';
const columns = [
   { label: 'Id', fieldName: 'Id'},
   { label: 'AmountOwned__c', fieldName: 'AmountOwned__c'},
   { label: 'Person__c', fieldName: 'Person__c'},
   { label: 'SplitType__c', fieldName: 'SplitType__c'},
   {label: 'SplitPortion__c', fieldName: 'SplitPortion__c'}];

//import equalSplit from '@salesforce/schema/SplitBillClass.equalSplit';
export default class SplitBillComp extends LightningElement {
    recordId
    Show=false
   @track billPerPerson=[]  
   @track data=[]
    @track columns=columns
    
      @wire(getSplitBillRecords, { relId : "$recordId" })
    wireSplitBillRecords({ data, error }) {
        if (data) {
            
             this.data = data
             
           this.error = undefined;
         } else if (error) {
           this.error = error;
           this.data = undefined;
         }
       }
                            

  
    handleSuccess(event){
       this.recordId=event.detail.id
        if(this.recordId !== null){
           console.log(this.recordId)
           this.Show=true
            this.dispatchEvent(new ShowToastEvent({
                    title: "SUCCESS!",
                    message: "New record has been created.",
                   variant: "success",
                }),
           );
         }
    }
   }