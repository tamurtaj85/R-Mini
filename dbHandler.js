import { Product } from "./src/models/index.js"

console.log(await Product.find({}).exec());
// console.log(Product.db.models.Product);
// console.log(Product.collection)