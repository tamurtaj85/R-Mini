import userSchema from "./userDataValidation.js";
import { productSchema } from "./productDataValidation.js";

async function validateInputData(schema, data, options) {
  return await schema.validateAsync(data, options);
}

export default { userSchema, productSchema, validateInputData };
