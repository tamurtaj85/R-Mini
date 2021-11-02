import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderItems_Schema = Schema({
  orderID: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
});

export const OrderItems = mongoose.model("OrderItems", orderItems_Schema);
