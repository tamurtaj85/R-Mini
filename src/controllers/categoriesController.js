import models from "../models/index.js";

async function addParentCategory(req, res) {
  if (!req.body.parentCategory)
    return res.status(400).json("Could not leave parent category empty!");

  try {
    await models.Categories.create(req.body);

    res.status(201).json(req.body);
  } catch (e) {
    res.json(e.message);
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

async function getProductsInParentCategory(req, res) {
  const { pc_Id } = req.params;

  if (!pc_Id)
    return res.status(400).json("No id for parent category is provided!");

  try {
    // Search for the parent id in products collection and then display all the collections
  } catch (e) {
    res.json(e.message);
  }
}

export default {
  addParentCategory,
  getCategories,
  getProductsInParentCategory,
};
