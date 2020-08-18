var fs = require("fs");
fs.writeFile('./test.txt', `${Date.now()}\n`, { flag: 'a', encoding: 'utf-8' }, function (err) {
  if (err) {
    console.log("文件写入失败")
  } else {
    console.log("文件写入成功");
  }
}) 