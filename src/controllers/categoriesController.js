import models from "../models/index.js";

async function addParentCategory(req, res) {
  if (!req.body.parentCategory)
    return res.status(400).json("Could not leave parent category empty!");

  try {
    const category = await models.Categories.create(req.body);

    res.status(201).json(category);
  } catch (e) {
    res.send(e.message);
  }
}

async function getCategories(req, res) {
  try {
    const data = await models.Categories.find({}).exec();
    res.status(200).json(data);
  } catch (e) {
    res.send(e.message);
  }
}

async function getProductsPerCategory(req, res) {
  try {
    const categoryIDs = await models.Categories.find({}).select("_id");

    const numberOfProducts = await Promise.all(
      categoryIDs.map(async (category) => {
        const products = await models.Product.find({
          productCategory: category._id,
        });
        // console.log(products.length);
        return products.length;
      })
    );

    res.status(200).json(numberOfProducts);
  } catch (e) {
    res.send(e.message);
  }
}

export default {
  addParentCategory,
  getCategories,
  getProductsPerCategory,
};
