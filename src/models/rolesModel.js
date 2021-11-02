import mongoose from "mongoose";
const Schema = mongoose.Schema;

const rolesSchema = Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  userRole: {
    type: [{ type: String, enum: ["super-admin", "sales-agent", "consumer"] }],
    default: ["consumer"],
  },
});

export const Roles = mongoose.model("Roles", rolesSchema);
