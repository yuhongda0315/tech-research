import foo from './foo.js';
export default function () {
  let name = "martin", age = 25;
  let user = {name, age};


  let {name: myName} = user;
  console.log(myName);

  console.log(foo);
  return new Promise((resole, reject) => {
    
  });
}
