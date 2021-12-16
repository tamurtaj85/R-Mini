import models from "../models/index.js";

async function getAllUsers(req, res) {
  // get all the users id which have role as consumer
  res.status(200).json(await models.User.find({}));
}

async function getUserByID(req, res) {
  const { uID } = req.params;

  if (!uID) res.status(404).send("No user ID provided");

  try {
    res
      .status(200)
      .json(
        await models.User.findById(uID.slice(1)).select(
          "id fullName email verified"
        )
      );
  } catch (error) {
    res.send(error.message);
  }
}

async function updateUserInfo(req, res) {
  const { uID } = req.params;

  if (!uID) res.status(404).send("No user ID provided");

  try {
    const updatedInfo = await models.User.findByIdAndUpdate(
      uID.slice(1),
      req.body
    ).exec();

    res.status(201).json(updatedInfo);
  } catch (error) {
    res.send(error.message);
  }
}

async function getAllConsumers(req, res) {
  // get all the users id which have role as consumer
  res.status(200).json(await models.User.findById());
}

async function getAllSalesAgents(req, res) {
  // get all the users id which have role as sales-agent
  res.status(200).json(await models.User.findById());
}

export default {
  getAllUsers,
  getUserByID,
  updateUserInfo,
  getAllConsumers,
  getAllSalesAgents,
};
