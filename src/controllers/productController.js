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

    return res.sendStatus(201,{Product: newProduct});
}

function getAllProduct(req, res){
    return res.sendStatus(200, Product.find({}));
}

function getOneProduct(req, res){

}

function deleteProduct(req, res){

}

export {addProduct, getAllProduct, getOneProduct, deleteProduct};
