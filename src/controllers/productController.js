import models from "../models/index.js";
import { errorMessages } from "../utils/genericMessages.js";

async function addProduct(req, res) {
  try {
    const newProduct = await models.Product.create(req.body);

    return res.status(201).json({ Product: newProduct });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function getAllProduct(req, res) {
  return res.status(200).json(await models.Product.find({}));
}

async function updateProduct(req, res) {
  const { pID } = req.params;

  if (!pID) return res.status(404).end();

  try {
    const updatedProduct = await models.Product.findByIdAndUpdate(
      pID,
      req.body
    ).exec();
    
    return res.json(updatedProduct);
  } catch (e) {
    res.json(e.message);
  }
}

async function getOneProduct(req, res) {
  const { pID } = req.params;

  if (!pID) return res.status(404).end();

  return res.status(200).json(await models.Product.findByID(pID).exec());
}

async function deleteProduct(req, res) {
  const { pID } = req.params;

  if (!pID) return res.status(404).end();

  let data = await models.Product.findByID(pID).exec();

  if (!data.productIsDeleted) {
    data.productIsDeleted = true;
    data.save();

    return res.status(200).send(data);
  } else return res.status(404).json(errorMessages.resourceEM.RES_NOT_FOUND);

  // await Product.findBypIDAndDelete(pID).exec();
}

export default {
  addProduct,
  getAllProduct,
  updateProduct,
  getOneProduct,
  deleteProduct,
};
