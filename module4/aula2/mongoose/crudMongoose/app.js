import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

import mongoose from "mongoose";

const connection = async () => {
  try {
    // conecando com banco de dados
    await mongoose.connect(
      `mongodb+srv://evertonshow:pedro404392@account.ursoy.mongodb.net/account?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("conectado com o mongo Atlas ");
  } catch (error) {
    console.log("erro em conecta " + error);
  }
};
connection();
const app = express();
app.use(express.json());
app.use(studentRoutes);

app.listen(3000, () => console.log("server initial"));
