import { promises as fs } from "fs";

let arrayEstados = [];
start();
async function start() {
  const estAll = JSON.parse(await fs.readFile("estado.json"));
  const citAll = JSON.parse(await fs.readFile("cidades.json"));

  try {
    estAll.forEach((item) => {
      const teste = citAll.filter((cit) => {
        return item.ID === cit.Estado;
      });
      //console.log(teste.length);
      fs.writeFile(`${item.Sigla}.json`, JSON.stringify(teste, null, 2));
    });
    estAll.forEach((ite) => {
      let tamanho = citAll.filter((item) => {
        return ite.ID === item.Estado;
      });

      fs.writeFile(ite.Sigla + ".txt", JSON.stringify(tamanho.length));
    });
  } catch (error) {
    console.log(error);
  }
  // teste(teste);
}
