var utils = require('./utils');
var RongSDK = require('rongcloud-sdk')({
  appkey: 'e0x9wycfx7flq',
  secret: 'UfmrYyG1lpE',
  api: 'http://apixq.rongcloud.net:9200'
});
var User = RongSDK.User;

var user = {
	id: 'membner10_1',
	name: 'Maritn',
	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
};
User.register(user).then(result => {
	console.log(result);
}, error => { 
	console.log(error);
});

