import userSchema from "./userDataValidation.js";
import { productSchema } from "./productDataValidation.js";

async function validateInputData(schema, data, options) {
  try {
    await schema.validateAsync(data, options);
  } catch (e) {
    console.log(e.message);
  }
}

export default { userSchema, productSchema, validateInputData };
