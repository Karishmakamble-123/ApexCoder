import { LightningElement } from 'lwc';

export default class ChildCalculator extends LightningElement {

title = "Welcome to Lightning Web Components!";
  isShowSub=false;
  isShowAdd=false;
  isShowMul=false;
  isShowDiv=false;

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }

  add(){
  this.isShowAdd=true;
  this.isShowSub=false;
  this.isShowMul=false;
  this.isShowDiv=false;
  }
  sub(){
  this.isShowAdd=false;
  this.isShowSub=true;
  this.isShowMul=false;
  this.isShowDiv=false;
  }
  mul(){
  this.isShowAdd=false;
  this.isShowSub=false;
  this.isShowMul=true;
  this.isShowDiv=false;
  }
  div(){
    this.isShowAdd=false;
    this.isShowSub=false;
    this.isShowMul=false;
    this.isShowDiv=true; 
  }
}
   
