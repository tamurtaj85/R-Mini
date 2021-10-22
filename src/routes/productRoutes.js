import controller from "../controllers/index.js";
import validationSchemas from "../validations/index.js";
import { validator } from "../middleware/validatorMW.js";

const options = { warnings: true };

export function routes_Products(app) {
  app.post(
    "/product",
    validator(validationSchemas.productSchema, options),
    controller.controller_Products.addProduct
  );

  app.get("/products", controller.controller_Products.getAllProduct);

  app
    .route("/product/:id")
    .get(controller.controller_Products.getOneProduct)
    .delete(controller.controller_Products.deleteProduct);
}
