import jwt from "jsonwebtoken";
import models from "../models/index.js";
import { JWT_EXPIRY } from "../utils/constants.js";
import { errorMessages } from "../utils/genericMessages.js";

function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
}

async function verifyToken(token) {
  const { id, iat, exp } = await jwt.verify(token, process.env.JWT_SECRET);
  return { id, iat, exp };
}

async function signUp(req, res) {
  try {
    await models.User.create(req.body, (err, u) => {
      if (err) res.status(500).send(errorMessages.userEM.SOMETHING_WW);

      const tokenKey = generateToken(u);
      res.status(201).send({ userData: u, token: tokenKey, auth: true });
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function signIn(req, res) {
  try {
    const user = await models.User.findOne({ email: req.body.email }).exec();

    if (!user) {
      return res.status(404).send(errorMessages.userEM.WRONG_INFO);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send(errorMessages.userEM.WRONG_INFO);
    }

    const userToken = generateToken(user);
    const verifiedToken = await verifyToken(userToken);

    res.status(200).send({ USER_ID: verifiedToken.id, USER_TOKEN: userToken });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

export default { signUp, signIn, verifyToken };
