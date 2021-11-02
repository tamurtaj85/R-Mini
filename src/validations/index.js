import userSchema from "./userInputValidation.js";
import { productSchema } from "./productInputValidation.js";
import { orderSchema } from "./orderInputValidation.js";

async function validateInputData(schema, data, options) {
  return await schema.validateAsync(data, options);
}

export default { userSchema, productSchema, orderSchema, validateInputData };
