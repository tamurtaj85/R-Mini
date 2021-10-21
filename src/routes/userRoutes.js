import controller from "../controllers/index.js";

export function routes_User(app) {
  app.get("/users/:consumers", controller.controller_User.getAllUsers);
  app.get("/users/:sales-agent", controller.controller_User.getAllSalesAgents);
}
