import controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

export function routes_Categories(app) {
  app.use("/category", middleware.authenticateUser);

  // Add Category
  app
    .route("/category")
    .post(controller.controller_Categories.addParentCategory);

  // Add Child Category under provided parent category
  // Get Child Categories under provided parent category
  // Delete Parent Category
  app
    .route("/category/:pc_Id")
    .get(controller.controller_Categories.getProductsInParentCategory);
    // .delete(controller.controller_Categories);
}
