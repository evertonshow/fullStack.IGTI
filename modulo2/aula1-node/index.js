// process.argv são os parametros do caminho só que ele traz em string.
// aqui o parametro com depois do arquivo tipo index.js 100
const numero = parseFloat(process.argv[2]);
//const numero = 100;
const multiplos = [];
for (let i = 0; i < numero; i++) {
  if (i % 5 === 0 || i % 3 === 0) multiplos.push(i);
}
console.log(multiplos);
