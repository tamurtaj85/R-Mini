export async function routes_User(app) {
  const { controller_Users } = await import("../controllers/index.js");

  app.route("/users/:consumers").get(controller_Users.getAllUsers);
  app.route("/users/:sales-agent").get(controller_Users.getAllSalesAgents);
}
