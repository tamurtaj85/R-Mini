import Joi from "joi";

const fullName = Joi.string().trim().required();
const email = Joi.string().email().trim().required();
const password = Joi.string()
  .trim()
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  .min(5)
  .max(15)
  .required();

const pin = Joi.string().required().length(4);
const verified = Joi.bool();

const userValidationSchema_SignIn = Joi.object({
  email,
  password,
});

const userValidationSchema_SignUp = Joi.object({
  fullName,
  userValidationSchema_SignIn,
  pin,
  verified,
});

export { userValidationSchema_SignIn, userValidationSchema_SignUp };
