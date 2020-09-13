import { promises as fs, readFile } from "fs";

let arrayEstados = [];
start();
async function start() {
  const estAll = JSON.parse(await fs.readFile("./files/estado.json"));
  const citAll = JSON.parse(await fs.readFile("./files/cidades.json"));

  try {
    estAll.forEach((item) => {
      const stateCity = citAll.filter((cit) => {
        return item.ID === cit.Estado;
      });

      fs.writeFile(`./states/${item.Sigla}.json`, JSON.stringify(stateCity, null, 2));
    });
    await sizeCity(true)
    await sizeCity(false)
    await getCityLarge(true)
    await getCityLarge(false)


  } catch (error) {
    console.log(error);
  }
}
async function sizeCity(more) {
  const estAll = JSON.parse(await fs.readFile("./files/estado.json"));
  const citAll = JSON.parse(await fs.readFile("./files/cidades.json"));

  for (const list of estAll) {
    const count = citAll.filter(cit => cit.Estado === list.ID)
    arrayEstados.push({ uf: list.Sigla, count: count.length })
  }
  arrayEstados.sort((a, b) => b.count - a.count)


  const result = []
  if (more) {
    arrayEstados.slice(0, 5).forEach(item => result.push(item.uf + ' - ' + item.count))
  } else {
    arrayEstados.slice(- 5).forEach(item => result.push(item.uf + ' - ' + item.count))
  }
  console.log(result);
}

async function getNameBigSize(uf) {

  const citAll = JSON.parse(await fs.readFile(`./states/${uf}.json`));
  let result
  citAll.forEach(cit => {
    if (!result) {
      result = cit
    } else if (cit.Nome.length > result.Nome.length) {
      result = cit
    } else if ((cit.Nome.length === result.Nome.length) && (cit.Nome.toLowerCase() < result.Nome.toLowerCase())) {
      result = cit
    }
  })
  return result
}
async function getNameSmallSize(uf) {

  const citAll = JSON.parse(await fs.readFile(`./states/${uf}.json`));
  let result
  citAll.forEach(cit => {
    if (!result) {
      result = cit
    } else if (cit.Nome.length < result.Nome.length) {
      result = cit
    } else if ((cit.Nome.length === result.Nome.length) && (cit.Nome.toLowerCase() < result.Nome.toLowerCase())) {
      result = cit
    }
  })
  return result
}
async function getCityLarge(size) {

  const estAll = JSON.parse(await fs.readFile("./files/estado.json"));

  const list = []

  for (const state of estAll) {
    let cities
    if (size) {
      cities = await getNameBigSize(state.Sigla)

    } else {
      cities = await getNameSmallSize(state.Sigla)
    }
    list.push({ name: cities.Nome, uf: state.Sigla })
  }
  console.log(list);
  const result = list.reduce((prev, cur) => {
    if (size) {
      if (prev.name.length > cur.name.length) return prev
      else if (prev.name.length < cur.name.length) return cur
      else return prev.name.toLowerCase() > cur.name.toLowerCase() ? prev : cur
    } else {
      if (prev.name.length < cur.name.length) return prev
      else if (prev.name.length > cur.name.length) return cur
      else return prev.name.toLowerCase() < cur.name.toLowerCase() ? prev : cur
    }
  })
  console.log(result);
}
