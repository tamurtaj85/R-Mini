// Importing all the neccesary modules and
import mongoose from "mongoose";

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
