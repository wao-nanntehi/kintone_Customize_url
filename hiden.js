(function(){
  'use strict';

  kintone.events.on('app.record.detail.show', function(event){
    kintone.app.record.setFieldShown('company_code', false);
    alert('読み込み成功');
    return event;
  });
})();
