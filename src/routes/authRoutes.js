export async function routes_Auth(app) {
  const { controller_Auth } = await import("../controllers/index.js");

  app.route("/sign-up").post(controller_Auth.signUp);
  app.route("/sign-in").get(controller_Auth.signIn);
}
