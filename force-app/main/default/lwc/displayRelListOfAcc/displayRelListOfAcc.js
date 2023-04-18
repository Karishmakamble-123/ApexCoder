import { LightningElement, api, wire,track } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';  

const columnCont = [{label:'Name',fieldName:'Name'},           
                    {label:'Id',fieldName:'Id'}]

    const columnOpp = [{label:'Name',fieldName:'Name'},         
                       {label:'StageName',fieldName:'StageName'}]

export default class DisplayRelListOfAcc extends LightningElement {
    @api recordId;  
    @track columnCont = columnCont
    @track columnOpp = columnOpp                        
   
    recordsCont;                             
    recordsOpp; 
    error;
   

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Contacts',
        fields: ['Contact.Id','Contact.Name']

    })listContactInfo({ error, data }) {
        if (data) {                                           
            console.log( 'Data is', JSON.stringify( data ) );
            let tempRecords = [];                             

            data.records.forEach( obj => {                   
                console.log( 'obj is', JSON.stringify( obj ) );
                let tempRecord = {};                          
                tempRecord.Id = obj.fields.Id.value;
                tempRecord.Name = obj.fields.Name.value;
                tempRecords.push( tempRecord );               

            } );

            this.recordsCont = tempRecords;                   

            console.log( 'Records are ' + JSON.stringify( this.recordsCon ) );
        } else if (error) {
            this.error = error;
            this.recordsCon = undefined;
        }
    }

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Opportunities',
        fields: ['Opportunity.Name','Opportunity.StageName']
        
    })listOppInfo({ error, data }) {
        if (data) {                                                 
            console.log( 'Data is', JSON.stringify( data ) );
            let tempRecords = [];                                  
            data.records.forEach( obj => {                         
                console.log( 'obj is', JSON.stringify( obj ) );
                let tempRecord = {};                               
                tempRecord.Name = obj.fields.Name.value;
                tempRecord.StageName = obj.fields.StageName.value;
                tempRecords.push( tempRecord );                    

            } );

            this.recordsOpp = tempRecords;

            console.log( 'Records are ' + JSON.stringify( this.recordsCon ) );
        } else if (error) {
            this.error = error;
            this.recordsOpp = undefined;
        }
    }
}