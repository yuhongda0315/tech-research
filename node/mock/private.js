var utils = require('./utils');
var RongSDK = require('rongcloud-sdk')({
  appkey: 'e0x9wycfx7flq',
  secret: 'UfmrYyG1lpE',
  api: 'http://apixq.rongcloud.net:9200'
});
var Message = RongSDK.Message;
var Private = Message.Private;

var index = 1;
setInterval(function () {
  var message = {
    senderId: 'martin01',
    targetId: 'membner09_1',
    objectName: 'RC:TxtMsg',
    content: {
      content: 'Private_' + index
    }
  };
  Private.send(message).then(result => {
    console.log(result);
  }, error => {
    console.log(error);
  });
  index += 1;
}, 2000);