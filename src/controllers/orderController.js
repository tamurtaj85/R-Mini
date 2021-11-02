import models from "../models/index.js";

async function placeOrder(req, res) {
  try {
    const newOrder = await models.Order.create({
      deliveryDate: req.body.deliveryDate,
      customerID: req.user.id,
      orderType: req.body.orderType,
    });

    const newOrderItems = await models.OrderItems.create({
      orderID: newOrder._id,
      productID: req.body.productID,
      quantity: req.body.quantity,
    });

    return res.status(201).send([newOrder, newOrderItems]);
  } catch (e) {
    return res.json(e.message);
  }
}

async function updateOrder(req, res) {
  const { oID } = req.params;

  if (!oID) return res.status(400).json("No ORDER ID provided!");

  try {
    const order = await models.OrderItems.findById(oID).exec();
    // Need to place logic here
    // order.updateOne(req.body);

    return res.status(201).json(order);
  } catch (e) {
    return res.json(e.message);
  }
}

async function getOrderDetails(req, res) {
  const { oID } = req.params;

  if (!oID) return res.status(400).json("No ORDER ID provided!");

  try {
    const orderItems = await models.OrderItems.findById(oID).exec();

    if (!orderItems)
      return res.status(404).json("No order found against this ID!");

    const order = await models.Order.findById(orderItems.orderID).exec();
    const product = await models.Product.findById(orderItems.productID).exec();

    return res
      .status(200)
      .json({ ORDER_DETAILS: [order, product, orderItems] });
  } catch (e) {
    return res.json(e.message);
  }
}

async function deleteOrder(req, res) {
  const { oID } = req.params;

  if (!oID) return res.status(400).json("No ORDER ID provided!");
  try {
    const { orderID } = await models.OrderItems.findById(oID).exec();

    return res.json(orderID);
  } catch (e) {
    return res.json(e.message);
  }
}

export default { placeOrder, updateOrder, getOrderDetails, deleteOrder };
