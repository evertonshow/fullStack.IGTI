import event from "./event.mjs";

//aqui trazemos o que foi feito e colocamos mais

event.on("teste", () => {
  console.log("testando");
});

//aqui os arquivos e emitir em outro arquivo usando o mesmo nome do evento
event.emit("teste", "vai aparece essa msg");
