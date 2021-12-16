import Joi from "joi";

const productStats = ["In Production", "Dicontinued"];

export const productSchema = Joi.object({
  productName: Joi.string().trim().required(),
  productPrice: Joi.number().greater(0).required(),
  productQuantity: Joi.number().greater(0).required(),
  productBrand: Joi.string().trim().uppercase().required(),
  productDescription: Joi.string()
    .trim()
    .length(1500)
    .allow(null, "")
    .default(""),
  productStatus: Joi.string()
    .strict()
    .valid(...productStats)
    .default(productStats[0]),
  productCategory: Joi.string().alphanum().strict().required(),
  productImg: Joi.string().uri().allow(""),
});
