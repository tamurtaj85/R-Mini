import controller from "../controllers/index.js";
import validationSchemas from "../validations/index.js";
import { validator } from "../middleware/validatorMW.js";

const options = { warnings: false };

export function routes_Auth(app) {
  app
    .route("/sign-up")
    .post(
      validator(validationSchemas.userSchema.schema_SignUp, options),
      controller.controller_Auth.signUp
    );

  app
    .route("/sign-in")
    .get(
      validator(validationSchemas.userSchema.schema_SignIn, options),
      controller.controller_Auth.signIn
    );
}
