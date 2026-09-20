(function(){
  'use strict';
  
  kintone.eventS.on('app.recod.detail.show',function(event){
    kintone.app.record.setFiledShown('company_code',false);
    retrun event;
  });
})();
