import mongoose from "mongoose";

const categories_Schema = new mongoose.Schema({
  parentCategory: String,
});

export const Categories = mongoose.model("Categories", categories_Schema);
