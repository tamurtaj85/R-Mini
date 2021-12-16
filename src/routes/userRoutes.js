import controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

export function routes_User(app) {
  app.use("/users", middleware.authenticateUser);

  app.get("/users", controller.controller_User.getAllUsers);

  app
    .route("/user/:uID")
    .get(controller.controller_User.getUserByID)
    .put(controller.controller_User.updateUserInfo);

  app.get("/users/consumers", controller.controller_User.getAllConsumers);

  app.get("/users/sales-agent", controller.controller_User.getAllSalesAgents);
}
