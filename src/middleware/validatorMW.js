import validationSchemas from "../validations/index.js";

// To use a middle ware with custom parameters, the syntax is as following:
// only function expression is used for this purpose
export const validator = (schema, options) => (req, res, next) => {
  try {
    validationSchemas.validateInputData(schema, req.body, options);

    next();
  } catch (e) {
    res.status(422).send(e.message);
  }
};
