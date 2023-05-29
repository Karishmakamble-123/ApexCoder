import { LightningElement } from 'lwc';
import  getDog from "@salesforce/apex/createRandomDog.getDog"

export default class CreateRandomDogLWC extends LightningElement {
    
  imageReady=false;
  loadingSpinner=false;
  pictureUrl;
  
  handleClick(){
   this.loadingSpinner =true;
   this.imageReady=false;

   getDog ()
   .then(result=>{
      this.pictureUrl=JSON.parse(result).message;
      this.loadingSpinner=false;
      this.imageReady=true;
   })
}
}