import { Product } from "../models/index.js";

async function addProduct(req, res) {
  if (
    !req.body.productName ||
    !req.body.productPrice ||
    !req.body.productQuantity ||
    !req.body.productBrand
  )
    return res.sendStatus(400, {
      message: "Don't leave important fields empty!",
    });

  const newProduct = await Product.create(req.body);

  return res.status(201).json({ Product: newProduct });
}

async function getAllProduct(req, res) {
  return res.status(200).json(await Product.find({}));
}

async function getOneProduct(req, res) {
  const { id } = req.params;

  if (!id) return res.status(404).end();

  return res.status(200).json(await Product.findById(id).exec());
}

async function deleteProduct(req, res) {
  const { id } = req.params;

  if (!id) return res.status(404).end();

  await Product.findByIdAndDelete(id).exec();

  return res.status(200).end();
}

export { addProduct, getAllProduct, getOneProduct, deleteProduct };
