import validationSchemas from "../validations/index.js";

// To use a middle ware with custom parameters, the syntax is as following:
// only function expression is used for this purpose
// export const validator = (schema, options) => async (req, res, next) => {
//   try {
//     const validatedData = await validationSchemas.validateInputData(
//       schema,
//       req.body,
//       options
//     );

//     req.body = validatedData.value;
//     next();
//   } catch (e) {
//     if (e.isJoi) return res.status(422).json(e.message);
//     return res.status(500).json(e.message);
//   }
// };

// It was basically a closure
export function validator(schema, options = { warnings: true }) {
  return async (req, res, next) => {
    try {
      const validatedData = await validationSchemas.validateInputData(
        schema,
        req.body,
        options
      );

      req.body = validatedData.value;
      next();
    } catch (e) {
      if (e.isJoi) return res.status(422).json(e.message);
      res.status(500).json(e.message);
    }
  };
}
