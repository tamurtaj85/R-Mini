import models from "../models/index.js";

async function getAllUsers(req, res) {
  // get all the users id which have role as consumer
  return res.status(200).json(await models.User.findById());
}

async function getAllSalesAgents(req, res) {
  // get all the users id which have role as sales-agent
  return res.status(200).json(await models.User.findById());
}

export default { getAllUsers, getAllSalesAgents };
