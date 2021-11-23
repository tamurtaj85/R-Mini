import controller from "../controllers/index.js";
import { errorMessages } from "../utils/genericMessages.js";

export async function authenticateUser(req, res, next) {
  const authHeader = req.headers["auth-token-header"];

  // Actual syntax for token: BEARER TOKEN
  //   const token = authHeader?.split(" ")[1];
  const token = authHeader;

  if (!token) return res.status(401).json("No token provided!");

  try {
    const user = await controller.controller_Auth.verifyToken(token);
    req.user = user;
    next();
  } catch (e) {
    res.status(401).json(errorMessages.userEM.NOT_AUTHORIZED);
  }
}
