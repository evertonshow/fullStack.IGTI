import { EventEmitter } from "events";
const evenEmiter = new EventEmitter();

//aqui vc on e coloca o nome do evento que quiser
evenEmiter.on("teste", (obj) => console.log(obj));
//pode concaterna tb com mesmo nome do evento.
evenEmiter.on("teste", (obj) => {
  console.log(obj + "2");
});

// no emit vc pode colocar um json ou uma string ou number
//evenEmiter.emit("teste", "testando");

//exportando o arquivo
export default evenEmiter;
