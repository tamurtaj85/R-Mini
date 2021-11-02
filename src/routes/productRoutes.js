import controller from "../controllers/index.js";
import validationSchemas from "../validations/index.js";
import middleware from "../middleware/index.js";

export function routes_Products(app) {
  app.use("/product?s", middleware.authenticateUser);

  app.post(
    "/product",
    middleware.validator(validationSchemas.productSchema),
    controller.controller_Products.addProduct
  );

  app.get("/products", controller.controller_Products.getAllProduct);

  app
    .route("/product/:pID")
    .put(controller.controller_Products.updateProduct)
    .get(controller.controller_Products.getOneProduct)
    .delete(controller.controller_Products.deleteProduct);
}
