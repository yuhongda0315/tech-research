var utils = require('./utils');
var RongSDK = require('rongcloud-sdk')({
  appkey: 'e0x9wycfx7flq',
  secret: 'UfmrYyG1lpE',
  api: 'http://apixq.rongcloud.net:9200'
});
var Message = RongSDK.Message;
var Group = Message.Group;

var groupIds = utils.getGroupIds();

var index = 1, count = 0;
setInterval(function () {
  groupIds.forEach(function (groupId) {
    var message = {
      senderId: 'seal9903',
      targetId: groupId,
      objectName: 'RC:TxtMsg',
      content: {
        content: 'Group_' + index
      }
    };
    Group.send(message).then(result => {
      count += 1;
      console.log('send ' + count + ' successfully');
    }, error => {
      console.log(error);
    });
  });
  index += 1;
}, 1000);