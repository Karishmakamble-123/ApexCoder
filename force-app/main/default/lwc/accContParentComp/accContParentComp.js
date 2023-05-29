import { LightningElement } from 'lwc';

export default class accContParentComp extends LightningElement {
  
contactName;
  showFeatures = true;


  contactCreatedParent(event){
     this.contactName= event.detail
     
          // Creates the event with the contact ID data.
          const selectedEvent = new CustomEvent('contactcreated', { detail: event.contact.Name });
          // Dispatches the event.
          this.dispatchEvent(selectedEvent);
          const evt = new ShowToastEvent({
              title: '<<NAME RECEIVED IN EVENT>>',
              message: '<<NAME RECEIVED IN EVENT>>',
              variant:'success',
          });
          this.dispatchEvent(evt);
    }
}