//importado pode colocar o ponto .js ou nao no common

// // usando o sistema common do js
// const multi = require("./operation2.js");
// const operation = require("./operation");

// usando o es6-module precisa colocar .js
import multi from "./operation2.js";
import op from "./operation.js";
import { division, rest } from "./operation3.js";
//import { sum, subtract, name } from "./operation";

console.log(op.sum(2, 4));
console.log(op.subtract(9, 4));
console.log(op.name);
console.log(multi(2, 4));
console.log(division(9, 3));
console.log(rest(10, 3));
