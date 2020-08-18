var getGroupIds = function () {
  var groupIds = [];
  var range = 11;
  for (var index = 1; index < range; index++) {
    groupIds.push('group10_' + index);
  }
  return groupIds;
};

var getMembers = function () {
  var members = [];
  var range = 11;
  for (var index = 1; index < range; index++) {
    members.push({
      id: 'membner10_' + index
    });
  }
  return members;
};
module.exports = {
  getGroupIds,
  getMembers
};