import { LightningElement,track, api} from 'lwc';
import getPolicyHolderList from '@salesforce/apex/policyHolderController.getPolicyHolderList';
import generateData from './generateData';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class InsuranceManagementLWC extends LightningElement {
  data = [];
  columns = columns;
  searchKey;
  @track policyholder;
  @track agent;
  @track lifeInsurance;
  @track payment;
  @track isShowAgent = false;
  @track isShowPolicyHolder = false;
  @track isShowLifeInsurance = false;
  @track isShowMotorInsurance = false;
  @track showAgentButtons = false;
  @track showAgentButtons = false;
  @track showAddAgentForm = false;
  @track showViewAgentForm= false;
  @track showPolicyHolderTable = false;
  @track agentRecordId;
  @api recordId;
  
  

  //This Funcation will get the value from Text Input.
  handelSearchKey(event){
    this.searchKey = event.target.value;
}



SearchPHHandler(){
    //call Apex method.
    getPolicyHolderList({textkey: this.searchKey})
    .then(result => {
            this.policyholder = result;
    })
    .catch( error=>{
        this.policyholder = null;
    });

}
cols = [
    {label:'PH ID', fieldName:'PH_ID__c' , type:'Auto Number'} ,
    {label:'Policy Type', fieldName:'Policy_Type__c' , type:'Picklist'} ,
    {label:'Premium Amount', fieldName:'Premium_Amount__c' , type:'Currency'},
    {label:'Due Date', fieldName:'Due_Date__c' , type:'Date'}     
]
connectedCallback() {
  const data = generateData({ amountOfRecords: 100 });
  this.data = data;
}

  handleAgentClick() {
    this.isShowAgent = true;
    this.isShowPolicyHolder = false;
    this.isShowLifeInsurance = false;
    this.isShowMotorInsurance = false;
    this.showAgentButtons = true;
    this.showAddAgentForm = false;
    this.showViewAgentForm = false;
    
  }

  handlePolicyHolderClick() {
    this.isShowAgent = false;
    this.isShowPolicyHolder = true;
    this.isShowLifeInsurance = false;
    this.isShowMotorInsurance = false;
    this.showAgentButtons = false;
    this.showPolicyHolderTable = true;
  }

  handleLifeInsuranceClick() {
    this.isShowAgent = false;
    this.isShowPolicyHolder = false;
    this.isShowLifeInsurance = true;
    this.isShowMotorInsurance = false;
    this.showAgentButtons = false;
  }

  handleMotorInsuranceClick() {
    this.isShowAgent = false;
    this.isShowPolicyHolder = false;
    this.isShowLifeInsurance = false;
    this.isShowMotorInsurance = true;
    this.showAgentButtons = false;
  }

  handleAddAgentClick() {
    // handle add agent button click
    this.showAddAgentForm = true;
    this.showViewAgentForm = false;
   
  }
  
  handleViewAgentClick(event) {
    this.showViewAgentForm = true;
    this.showAddAgentForm = false;

   
  }
  handleAgentCancel() {
    this.showViewAgentForm = true;
    this.showAddAgentForm = false;
  }
  handleAgentSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }
  handleAgentViewSubmit(event){
    this.showViewAgentForm = true;
    this.showAddAgentForm = false;


  this.template.querySelector('lightning-record-edit-form').submit();

  }
  
  handleAgentSuccess(event) {
    this.agentRecordId = event.detail.id;
    this.showViewAgentForm = true;
    this.showAddAgentForm = false;
  }
  handleAgentViewSuccess(event){
    this.showViewForm = false;

  }



  handleAgentSave() {
    this.template.querySelector('lightning-record-edit-form').submit();
  }

  handleAgentCancel() {
    this.showAddAgentForm = false;
    this.showViewAgentForm = true;
}
handleAgentView() {
    this.showViewForm = true;
    this.showViewAgentForm = false;
    
}
}