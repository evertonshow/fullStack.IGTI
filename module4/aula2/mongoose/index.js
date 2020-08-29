import mongoose from "mongoose";

const connection = async () => {
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
};
connection();

// criando um modelo

// const schemas = mongoose.Schema;
// const studentSchema = new schemas({
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

// definindo um modelo na coleção

// const mod = mongoose.model("student", studentSchema, "student");
// const students = mod.model("student");

mongoose.model("student", studentSchema, "student");
const students = schema.model("student");

new students({
  name: "teste ",
  subject: "kkkk",
  type: "Prova Final",
})
  .save()
  .then(() => console.log("documento inserido com sucesso"))
  .catch(console.error("documento não inserido"));
