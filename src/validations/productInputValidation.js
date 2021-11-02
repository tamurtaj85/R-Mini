import Joi from "joi";

export const productSchema = Joi.object({
  productName: Joi.string().trim().required(),
  productPrice: Joi.number().greater(0).required(),
  productQuantity: Joi.number().greater(0).required(),
  productBrand: Joi.string().trim().uppercase().required(),
  productDescription: Joi.string().trim().length(1500),
  productStatus: Joi.string().strict()
    .valid("in production", "dicontinued")
    .default("in production"),
  productIsDeleted: Joi.boolean().default(false),
  productCategory: Joi.string().alphanum().strict().required(),
});
