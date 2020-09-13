const name = "Testando a exportação";

function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
// // aqui exporta o modulo em um objeto com sistema common do js
// module.exports = { sum, subtract, name };

// sistema ES6 module
export default { sum, subtract, name };
