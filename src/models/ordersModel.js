import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = Schema(
  {
    deliveryDate: Date,

    customerID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    
    orderType: [
      {
        type: String,
        enum: ["organic", "in-organic"],
        default: ["organic"],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
