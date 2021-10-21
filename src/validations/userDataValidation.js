import Joi from "joi";

const fullName = Joi.string().trim().required();
const email = Joi.string().email().trim().required();
const password = Joi.string()
  .trim()
  .min(5)
  .max(15)
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  .required();

const pin = Joi.string().length(4).required();
const verified = Joi.bool();

const schema_SignIn = Joi.object({
  email,
  password,
});

const schema_SignUp = Joi.object({
  fullName,
  email,
  password,
  pin,
  verified,
});

export default { schema_SignIn, schema_SignUp };