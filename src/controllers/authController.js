import jwt from "jsonwebtoken";
import models from "../models/index.js";
import { JWT_SECRET, JWT_EXPIRY } from "../utils/constants.js";
import { errorMessages } from "../utils/genericMessages.js";

function generateToken(user) {
  return jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
}

async function verifyToken(token) {
  await jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return err;

    return decoded;
  });
}

async function signUp(req, res) {
  try {
    await models.User.create(req.body, (err, u) => {
      if (err) res.status(500).send(errorMessages.userEM.SOMETHING_WW);

      const tokenKey = generateToken(u);
      return res.status(201).send({ userData: u, token: tokenKey, auth: true });
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function signIn(req, res) {
  try {
    const user = await models.User.findOne({ email: req.body.email }).exec();

    if (!user) {
      return res.status(401).send(errorMessages.userEM.WRONG_INFO);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(errorMessages.userEM.WRONG_INFO);
    }

    console.log(await verifyToken(generateToken(user)));

    return res.status(200).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export default { signUp, signIn };
