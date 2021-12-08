import models from "../models/index.js";
import { errorMessages } from "../utils/genericMessages.js";

async function addProduct(req, res) {
  try {
    const newProduct = await models.Product.create(req.body);

    res.status(201).send({ Product: newProduct });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function getAllProduct(req, res) {
  res.status(200).send(await models.Product.find({ productIsDeleted: false }));
}

async function updateProduct(req, res) {
  const { pID } = req.params;

  if (!pID) return res.status(404).end();

  try {
    const updatedProduct = await models.Product.findByIdAndUpdate(
      pID.slice(1),
      req.body
    ).exec();

    res.send(updatedProduct);
  } catch (e) {
    res.send(e.message);
  }
}

async function getOneProduct(req, res) {
  const { pID } = req.params;
  // console.log(pID.slice(1));
  if (!pID) return res.status(404).end();

  res.status(200).json(await models.Product.findById(pID.slice(1)).exec());
}

async function getProductsByCategory(req, res) {
  const { cID } = req.params;

  if (!cID) return res.status(404).end();

  res
    .status(200)
    .json(await models.Product.find({ productCategory: cID.slice(1) }).exec());
}

async function deleteProduct(req, res) {
  const { pID } = req.params;

  if (!pID) return res.status(404).end();

  let data = await models.Product.findById(pID.slice(1)).exec();

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
  getProductsByCategory,
  deleteProduct,
};
