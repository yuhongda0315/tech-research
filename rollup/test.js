(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.test = factory());
}(this, (function () { 'use strict';

  var inner = 'hello inner!';

  console.log(inner);
  var foo = 'hello world!';

  function main () {
    var name = "martin",
        age = 25;
    var user = { name: name, age: age };

    var myName = user.name;

    console.log(myName);

    console.log(foo);
    return new Promise(function (resole, reject) {});
  }

  return main;

})));
