import express from "express";
import { router } from "./routes/bankRouter.js";

import { db } from "./models/index.js";

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("Conectado com o mongodb com sucesso");
  } catch (error) {
    console.log("Erro ao conectar no mongodb " + error);
  }
})();

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORTA, () => {
  console.log("serve connection start");
});
