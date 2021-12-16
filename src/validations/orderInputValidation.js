import Joi from "joi";

export const orderSchema = Joi.object({
  deliveryDate: Joi.date().required(),
  orderType: Joi.string()
    .valid("Organic", "Inorganic")
    .default("Organic")
    .strict(),
  productID: Joi.string().alphanum().strict().required(),
  quantity: Joi.number().greater(0).required(),
});
