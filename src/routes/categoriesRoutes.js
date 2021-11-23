import controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

export function routes_Categories(app) {
  app.use("/category", middleware.authenticateUser);

  app
    .route("/category")
    .post(controller.controller_Categories.addParentCategory);

  app.route("/categories").get(controller.controller_Categories.getCategories);

  app
    .route("/category/:pc_Id")
    .get(controller.controller_Categories.getProductsInParentCategory);
  // .delete(controller.controller_Categories);
}
