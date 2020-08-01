import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
  rl.question("Digite um numero: ", (numero) => {
    //colocando o numero em number
    if (Number(numero) < 3) {
      // o close encerrar o loop
      rl.close();
    } else {
      const multiplos = [];
      for (let i = 0; i < numero; i++) {
        if (i % 5 === 0 || i % 3 === 0) multiplos.push(i);
      }
      console.log(multiplos);
      question();
    }
  });
}

//recursividade ,repetindo a pergunta.
// function question() {
//   rl.question("Digite um numero : ", (number) => {
//     console.log(number);
//     question();
//   });
// }

question();
