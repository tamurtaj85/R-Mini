// Importing all the neccesary modules and
import mongoose from "mongoose";
import { dbMessages } from "../utils/genericMessages.js";
import { PROCESS_TYPES } from "../utils/constants.js";

// Creating concerend schema
const productsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: dbMessages.requiredFields("Product Name", PROCESS_TYPES.LISTING),
    trim: true,
  },

  productPrice: {
    type: Number,
    required: dbMessages.requiredFields("Product Price", PROCESS_TYPES.LISTING),
    min: 0,
    default: 0,
  },

  productQuantity: {
    type: Number,
    required: dbMessages.requiredFields(
      "Product Quantity",
      PROCESS_TYPES.LISTING
    ),
    min: 0,
    default: 0,
  },

  productBrand: {
    type: String,
    required: dbMessages.requiredFields("Product Brand", PROCESS_TYPES.LISTING),
    trim: true,
  },

  productDescription: {
    type: String,
    trim: true,
  },

  productStatus: {
    type: String,
    enum: ["in production", "dicontinued"],
    default: ["in production"],
  },
});

export const Product = mongoose.model("Product", productsSchema);
