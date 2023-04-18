import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS = [   
    { label: 'Name', fieldName: 'Name' },
    { label: 'StageName', fieldName: 'StageName' }
    
];

export default class DisplayRelListOpp  extends LightningElement {

    @api recordId;
    recordCount;
    records;
    columns = COLUMNS;

    @wire( getRelatedListRecords, {

        parentRecordId: '$recordId', 
        relatedListId: 'Opportunities',  
        fields: [ 'Opportunity.StageName', 'Opportunity.Name' ]
       

    } )listInfo( { error, data } ) {

        if ( data ) {

            console.log( 'Data is', JSON.stringify( data ) );
            let tempRecords = [];

            data.records.forEach( obj => {

                console.log( 'obj is', JSON.stringify( obj ) );
                let tempRecord = {};
                tempRecord.StageName= obj.fields.StageName.value;
                tempRecord.Name = obj.fields.Name.value;
                tempRecords.push( tempRecord );

            } );

            this.records = tempRecords;
            this.recordCount = data.count;
            console.log( 'Records are ' + JSON.stringify( this.records ) );
            
        } else if (error) {
            
            this.records = undefined;

        }
    }

}