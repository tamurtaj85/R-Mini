// Importing all the neccesary modules and
import mongoose from "mongoose";
import { dbMessages } from "../utils/genericMessages.js";
import { PROCESS_TYPES } from "../utils/constants.js";

// Creating concerend schema
const productsSchema = new mongoose.Schema({
  productName: String,

  productPrice: Number,

  productQuantity: Number,

  productBrand: String,

  productDescription: String,

  productStatus: Array,
});

export const Product = mongoose.model("Product", productsSchema);
