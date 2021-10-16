import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  userID: String,
  userRole: {
    type: String,
    enum: ["super-admin", "sales-agent", "consumer"],
    default: ["consumer"],
  },
});

export const Roles = mongoose.model("Roles", rolesSchema);
