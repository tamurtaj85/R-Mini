import controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

export function routes_Categories(app) {
  app.use("/category", middleware.authenticateUser);

  app.post("/category", controller.controller_Categories.addParentCategory);

  app.get("/categories", controller.controller_Categories.getCategories);

  app.get(
    "/category/:pc_Id",
    controller.controller_Categories.getProductsInParentCategory
  );
  // .delete(controller.controller_Categories);
}
