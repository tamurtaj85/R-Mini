import controller from "../controllers/index.js";
import validationSchemas from "../validations/index.js";
import middleware from "../middleware/index.js";

export function routes_Auth(app) {
  app
    .route("/sign-up")
    .post(
      middleware.validator(validationSchemas.userSchema.schema_SignUp),
      controller.controller_Auth.signUp
    );

  app
    .route("/sign-in")
    .post(
      middleware.validator(validationSchemas.userSchema.schema_SignIn),
      controller.controller_Auth.signIn
    );
}
