public  class SplitBillClass {
    public static void equalSplit(list<Bill__c> bills){
        List<SplitBill__c> split= new List<SplitBill__c>();
        for(Bill__c bill : bills){
           
          List<Bill__c>b=[SELECT Id , Headcount__c, BillAmount__c,Type__c, Name FROM Bill__c WHERE Id=:bills];
          for(Bill__c bil : b){
          if(bil.Type__c =='Equal Split'){
          for(integer i=1; i<=bil.HeadCount__c; i++){
           SplitBill__c sp = new SplitBill__c();
            sp.SplitType__c = bil.Type__c;
            sp.Name = bil.Name;
            sp.Person__c = 'person' +i;
            sp.AmountOwned__c=bil.BillAmount__c/bil.Headcount__c;
            sp.Bill__c=bil.Id;
              
            split.add(sp);
         }
        }
        
    }
}
insert split;
    }
}