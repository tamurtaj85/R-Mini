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

    res.status(201).send([newOrder, newOrderItems]);
  } catch (e) {
    res.json(e.message);
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await models.Order.find({}).exec();
    const orderItems = await models.OrderItems.find({}).exec();

    res.status(200).json([orders, orderItems]);
  } catch (error) {
    console.error(error.message);
  }
}

async function updateOrder(req, res) {
  const { oID } = req.params;

  if (!oID) return res.status(400).json("No ORDER ID provided!");

  try {
    console.log(req.body);
    // const order = await models.OrderItems.findById(oID).exec();
    // Need to place logic here
    // order.updateOne(req.body);

    res.status(201).json("order");
  } catch (e) {
    res.json(e.message);
  }
}

async function getOrderDetails(req, res) {
  const { oID } = req.params;

  if (!oID) return res.status(400).json("No ORDER ID provided!");

  try {
    const orderItems = await models.OrderItems.findById(oID.slice(1)).exec();

    if (!orderItems)
      return res.status(404).json("No order found against this ID!");

    const order = await models.Order.findById(orderItems.orderID).exec();
    const product = await models.Product.findById(orderItems.productID).exec();

    res.status(200).json({ ORDER_DETAILS: [order, product, orderItems] });
  } catch (e) {
    res.json(e.message);
  }
}

async function deleteOrder(req, res) {
  const { oID } = req.params;

  if (!oID) return res.status(400).json("No ORDER ID provided!");
  try {
    const { orderID } = await models.OrderItems.findById(oID).exec();

    res.json(orderID);
  } catch (e) {
    res.json(e.message);
  }
}

export default {
  placeOrder,
  getAllOrders,
  updateOrder,
  getOrderDetails,
  deleteOrder,
};
