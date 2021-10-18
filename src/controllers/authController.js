import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import { JWT_SECRET, JWT_EXPIRY } from "../utils/constants.js";
import { errorMessages } from "../utils/genericMessages.js";

function generateNewToken(user) {
  return jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
}

async function signUp(req, res) {
  if (!req.body.email || !req.body.password) return res.stats(400).end();

  try {
    const newUser = await User.create(req.body);
    const tokenKey = generateNewToken(newUser);

    newUser.save((err) => {
      if (err) res.send(err);

      res.status(201).send({ userData: newUser, token: tokenKey, auth: true });
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

async function signIn(req, res) {
  if (!req.body.email || !req.body.password) return res.stats(400).end();

  try {
    const user = await User.findOne({ email: req.body.email })
      // .select("email password")
      .exec();

    if (!user) {
      return res.status(401).send(errorMessages.userEM.WRONG_INFO);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(errorMessages.userEM.WRONG_INFO);
    }

    res.status(200).send(user);

    // const token = req.headers["x-access-token"];
    // if (!token)
    //   return res
    //     .status(401)
    //     .send({ auth: false, message: "No token provided." });

    // jwt.verify(token, JWT_SECRET, function (err, decoded) {
    //   if (err)
    //     return res
    //       .status(500)
    //       .send({ auth: false, message: "Failed to authenticate token." });

    //   res.status(200).send(decoded);
    // });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

export { signUp, signIn };
