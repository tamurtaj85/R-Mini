import model from "../models/index.js";

async function addProduct(req, res) {
  try {
    const newProduct = await model.Product.create(req.body);

    return res.status(201).json({ Product: newProduct });
  } catch (e) {
    if (e.isJoi === true) res.status(422).send(e.message);
    res.status(500).send(e.message);
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

  await Product.findByIdAndDelete(id).exec();

  return res.status(200).end();
}

export default { addProduct, getAllProduct, getOneProduct, deleteProduct };
