var utils = require('./utils');
var RongSDK = require('rongcloud-sdk')({
  appkey: 'e0x9wycfx7flq',
  secret: 'UfmrYyG1lpE',
  api: 'http://apixq.rongcloud.net:9200'
});
var Group = RongSDK.Group;

var groupIds = utils.getGroupIds();
var members = utils.getMembers();

groupIds.forEach(function (id) {
  var group = {
    id: id,
    name: 'WaterGroup',
    members: members
  };
  Group.create(group).then(result => {
    console.log(result);
  }, error => {
    console.log(error);
  });
});