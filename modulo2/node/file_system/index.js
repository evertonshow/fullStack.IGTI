import { promises as al, writeFile } from "fs";
import { parse } from "path";

async function start() {
  try {
    //escrevi outro arquivo pra desmonstra mas todos fazem também
    await al.writeFile("testei.txt", "com async e await");
    await al.appendFile("testei.txt", "\ncolocando de forma mais clounder");
    const data = await al.readFile("testei.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
//start();
const arrayCarros = ["uno", "gol", "celta"];
const obj = {
  carros: arrayCarros,
};
writeReadJson();

async function writeReadJson() {
  try {
    //converte em string
    await al.writeFile("teste.json", JSON.stringify(obj));

    // fez a leitura do arquivo em array
    const data = JSON.parse(await al.readFile("teste.json"));
    //  converte para array parcial
    // console.log(JSON.parse(data));

    //modificamos o arquivo
    data.carros.push("sandero");
    //sobrescrevemos o arquivo
    await al.writeFile("teste.json", JSON.stringify(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
/*al.writeFile("teste.txt", "com promises")
  .then(() => {
    al.appendFile("teste.txt", "\nconcaternando com promises")
      .then(() => {
        al.readFile("teste.txt", "utf-8")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((error) => {
    console.log(error);
  });*/

//Utilizando as callbacks
// import fs from "fs";

//writeFiles é parecido com splice , so que
//o primeiro parametro ele ver se tem o arquivo
// se tiver ele colocar o segundo parametro ou cria e o terceiro é uma callback do arquivo.
// fs.writeFile("teste.txt", "bla bla bla", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log("teste com sucesso");
//     // ele concatena o arquivo do anterior no arquivo criado
//     fs.appendFile("teste.txt", "\nConcatenando com append File", function (
//       err
//     ) {
//       if (err) {
//         console.log(err);
//       } else {
//         // readFile mostra o conteudo do arquivo criado
//         fs.readFile("teste.txt", "utf-8", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

// de forma sycrona não recomendado para pois para a trend
// try {
//   console.log("1");
//   fs.writeFileSync("teste.txt", "teste de forma sincrona");
//   console.log("2");
//   const data = fs.readFileSync("teste.txt", "utf-8");
//   console.log(data);
//   console.log("3");
// } catch (error) {
//   console.log(error);
// }
