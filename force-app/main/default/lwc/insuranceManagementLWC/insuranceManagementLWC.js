import { LightningElement,track, api} from 'lwc';


export default class InsuranceManagementLWC extends LightningElement {

    
  @track isShowAgent = false;
  @track isShowPolicyHolder = false;
  @track isShowLifeInsurance = false;
  @track isShowMotorInsurance = false;
  @track showAgentButtons = false;
  @track showAgentButtons = false;
  @track showAddAgentForm = false;
  @track showViewAgentForm= false;
  @track agentRecordId;
  @api recordId;
  

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
}
handleAgentView() {
    this.showViewForm = true;
}
}