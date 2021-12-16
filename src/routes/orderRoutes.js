import controller from "../controllers/index.js";
import middleware from "../middleware/index.js";
import validationSchemas from "../validations/index.js";

export function routes_Order(app) {
  app.use("/order", middleware.authenticateUser);

  // Place order,
  app
    .route("/order")
    .post(
      middleware.validator(validationSchemas.orderSchema),
      controller.controller_Orders.placeOrder
    )
    .get(controller.controller_Orders.getAllOrders);

  // Update order,
  // Get order detalis, also data from orderItems
  // Delete order, also data from orderItems
  app
    .route("/order/:oID")
    .put(controller.controller_Orders.updateOrder)
    .get(controller.controller_Orders.getOrderDetails)
    .delete(controller.controller_Orders.deleteOrder);
}
