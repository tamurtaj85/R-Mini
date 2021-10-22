import model from "../models/index.js";
import {errorMessages} from '../utils/genericMessages.js';

async function addProduct(req, res) {
  try {
    const newProduct = await model.Product.create(req.body);

    return res.status(201).json({ Product: newProduct });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function getAllProduct(req, res) {
  return res.status(200).json(await model.Product.find({}));
}

async function getOneProduct(req, res) {
  const { id } = req.params;

  if (!id) return res.status(404).end();

  return res.status(200).json(await model.Product.findById(id).exec());
}

async function deleteProduct(req, res) {
  const { id } = req.params;

  if (!id) return res.status(404).end();

  let data = await model.Product.findById(id).exec();

  if (!data.productIsDeleted) {
    data.productIsDeleted = true;
    data.save();

    return res.status(200).send(data);
  } else return res.status(404).json(errorMessages.resourceEM.RES_NOT_FOUND);

  // await Product.findByIdAndDelete(id).exec();
}

export default { addProduct, getAllProduct, getOneProduct, deleteProduct };
