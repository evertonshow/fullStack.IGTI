import mongoose from "mongoose";
import bankMongoose from "./accountModel.js";

const db = {};

db.url = process.env.URL
db.bank = bankMongoose(mongoose);
db.mongoose = mongoose;
export { db };
