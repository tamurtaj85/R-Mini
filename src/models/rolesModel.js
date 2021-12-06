import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rolesSchema = Schema({
  role: String,
});

export const Roles = mongoose.model("Roles", rolesSchema);
