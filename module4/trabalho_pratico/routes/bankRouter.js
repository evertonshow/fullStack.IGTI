import express from "express";
import routes from "../controllers/controller.js";

const app = express();

app.post("/banks", routes.create);
app.get("/banks", routes.findAll);
app.get("/banks/:id", routes.findOne);
app.patch("/banks/:id", routes.update);
app.delete("/banks/:id", routes.remove);

export { app as router };
