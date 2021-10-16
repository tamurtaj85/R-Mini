// Importing all the neccesary modules and
import mongoose from "mongoose";
import { dbMessages } from "../utils/genericMessages.js";
import { PROCESS_TYPES } from "../utils/constants.js";

// Creating the concerend schema
const usersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: dbMessages.requiredFields("Fullname", PROCESS_TYPES.SIGN_UP),
    trim: true,
  },

  email: {
    type: String,
    required: dbMessages.requiredFields("Email", PROCESS_TYPES.SIGN_UP),
    trim: true,
  },

  password: {
    type: String,
    required: dbMessages.requiredFields("Password", PROCESS_TYPES.SIGN_UP),
    trim: true,
    minlength: 8,
  },

  pin: {
    type: Number,
    required: dbMessages.requiredFields("Pin", PROCESS_TYPES.SIGN_UP),
    trim: true,
    minlength: 4,
  },

  verified: Boolean,
});

// Compiling our schema into a mongoose model
export const User = mongoose.model("User", usersSchema);
