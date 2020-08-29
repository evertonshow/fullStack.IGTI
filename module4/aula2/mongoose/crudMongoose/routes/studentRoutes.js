import express from "express";
import Model from "../models/studentModel.js";

const app = express();

// Create
app.post("/student", async (req, res) => {
  try {
    const student = new Model(req.body);

    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Retrieve
app.get("/student", async (req, res) => {
  try {
    const body = req.body;
    const student = await Model.find(body);

    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update
app.patch("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Model.findByIdAndUpdate({ _id: id }, req.body, {
      //essa opção tras o documento autualizado.
      new: true,
    });
    res.send(student);
  } catch (err) {
    res.sendStatus(500);
  }
});

// Delete
app.delete("/student/:id", async (req, res) => {
  try {
    const student = await Model.findByIdAndRemove(req.params.id);

    if (!student) {
      res.status(404).send("Documento nao encontrado");
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});
export default app;
