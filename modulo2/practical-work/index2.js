import { promises as fs, writeFile } from "fs";

const times = [];

init();

async function init() {
  try {
    const data = JSON.parse(await fs.readFile("2003.json"));

    //inicializando array de times
    data[0].partidas.forEach((partida) => {
      times.push({ time: partida.mandante, pontuacao: 0 });
      times.push({ time: partida.visitante, pontuacao: 0 });
    });
    // console.log(times);
    //preenchendo a pontuacao dos times no array
    data.forEach((rodada) => {
      rodada.partidas.forEach((partida) => {
        const timeMandante = times.find(
          (item) => item.time === partida.mandante
        );
        const timeVisitante = times.find(
          (item) => item.time === partida.visitante
        );
        /*const timeMandante = findSimulado(partida.mandante);
        const timeVisitante = findSimulado(partida.visitante);*/

        if (partida.placar_mandante > partida.placar_visitante) {
          timeMandante.pontuacao += 3;
        } else if (partida.placar_visitante > partida.placar_mandante) {
          timeVisitante.pontuacao += 3;
        } else {
          timeMandante.pontuacao += 1;
          timeVisitante.pontuacao += 1;
        }
        console.log(timeMandante);
      });
    });

    times.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    });
    //console.log(times);
    await salvaTimes();
    await salvaQuatroPrimeiros();

    let timeMaiorNome = "";
    let timeMenorNome = times[0].time;
    times.forEach((item) => {
      if (item.time.length > timeMaiorNome.length) {
        timeMaiorNome = item.time;
      }
      if (item.time.length < timeMenorNome.length) {
        timeMenorNome = item.time;
      }
    });

    console.log(timeMaiorNome);
    console.log(timeMenorNome);

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    /*array.forEach(async x => {
            //console.log("1");
            console.log(await teste(x));
            //console.log("2");
        });*/
    /*array.map(async x => {
            console.log(await teste(x));
            return x;            
        });*/
    for (const x of array) {
      //   console.log(await teste(x));
    }

    for (let i = 0; i < array.length; i++) {
      // console.log(await teste(array[i]));
    }
  } catch (err) {
    console.log(err);
  }
}

async function salvaTimes() {
  await fs.writeFile("times.json", JSON.stringify(times, null, 2));
}

async function salvaQuatroPrimeiros() {
  await fs.writeFile(
    "quatroPrimeiros.json",
    JSON.stringify(times.slice(0, 4), null, 2)
  );
}

function findSimulado(time) {
  const x = times.find((item) => item.time === time);
  const y = { ...x };
  return y;
}

function teste(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number);
    }, Math.random() * 1000);
  });
}
