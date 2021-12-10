import controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

export function routes_Categories(app) {
  app.use("/category", middleware.authenticateUser);

  app
    .route("/category")
    .post(controller.controller_Categories.addParentCategory)
    .get(controller.controller_Categories.getProductsPerCategory);

  app.get("/categories", controller.controller_Categories.getCategories);

  // .delete(controller.controller_Categories);
}
