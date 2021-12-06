// Importing all the neccesary modules and
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Creating concerend schema
const productsSchema = Schema(
  {
    productName: String,

    productImg: String,

    productPrice: Number,

    productQuantity: Number,

    productBrand: String,

    productDescription: String,

    productStatus: String,

    productIsDeleted: {
      type: Boolean,
      default: false,
    },

    productCategory: { type: Schema.Types.ObjectId, ref: "Categories" },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productsSchema);
