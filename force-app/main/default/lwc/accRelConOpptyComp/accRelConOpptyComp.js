import { LightningElement,wire,track,api } from 'lwc';
import getContactRelAcc from '@salesforce/apex/AccRelConOppty.getContactRelAcc';      
import getOpptyRelAcc from '@salesforce/apex/AccRelConOppty.getOpptyRelAcc';  

const columnCont = [{label:'FirstName',fieldName:'FirstName'},
                   {label:'LastName',fieldName:'LastName'},                    
                   {label:'Id',fieldName:'Id'}]

 const columnOppty = [{label:'Name',fieldName:'Name'},           
                    {label:'StageName',fieldName:'StageName'}]

export default class AccRelConOppty extends LightningElement {

    @api recordId
    @api accountId

    @track dataCont = []                
    @track columnCont = columnCont

    @track dataOppty = []               
    @track columnOppty = columnOppty

    @wire(getContactRelAcc,({accountId: '$recordId'}))  
    wiredGetContact({ error, data }) {
        if (data) {
            this.dataCont = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.dataCont = undefined;
        }
    }

    @wire(getOpptyRelAcc,({accountId : '$recordId'}))  
    wiredGetOpportunity({ error, data }) {
        if (data) {
            this.dataOppty = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.dataOppty = undefined;
        }
    }


}