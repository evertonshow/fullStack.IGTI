import mongoose from "mongoose";

// criando modelo
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
    min: 0,
    // validate(value) {
    //   if (value < 0) {
    //     throw new console.error("valor negativo não pode ser inserido");
    //   }
    // },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const studentModel = mongoose.model("student", studentSchema, "student");

export default studentModel;
