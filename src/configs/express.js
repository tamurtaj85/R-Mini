import express from "express";
import env from "dotenv";
import { PORT } from "../utils/constants.js";
import routes from "../routes/index.js";

const app = express();
env.config();

// Adding middleware upfront for every end point to parse the incomming request body to json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Applying routes to app
routes.routes_Auth(app);
routes.routes_User(app);
routes.routes_Categories(app);
routes.routes_Products(app);
routes.routes_Order(app);

app.listen(PORT);
console.log("App is listening to the port @ http://localhost/" + PORT);
