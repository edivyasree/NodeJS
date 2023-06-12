const name1=require('./utils')
const add=require('./utils')
//(or) "here name1 is imported from utils.js file"
const firstname=require('./utils')
const  sub=require('./utils')
const name="Divya"
console.log(name,firstname);
console.log(name1);

const sum=add(3,8)

console.log(sum);
const  subr=sub(11,2)
console.log(subr);