const ejs = require('ejs');

var people = ['geddy', 'neil', 'alex']

var tpl = `
var count = 1;
if(count > <%= 1 %>){
  console.log('<%= people.join("|") %>');
}else{
  console.log('<%= people.join(",") %>');
}
`
var html = ejs.render(tpl, {people: people});
console.log(html);
