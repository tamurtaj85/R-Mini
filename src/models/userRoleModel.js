import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rolesSchema = Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  userRole: { type: Schema.Types.ObjectId, ref: "Roles" },
});

export const Roles = mongoose.model("UserRoles", rolesSchema);
