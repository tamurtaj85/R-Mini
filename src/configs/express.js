import express from "express";
import bodyParser from "body-parser";
import { PORT } from "../utils/constants.js";
import routes from "../routes/index.js";

const app = express();

// Adding middleware upfront for every end point to parse the incomming request body to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Applying routes to app
routes.routes_Auth(app);
routes.routes_User(app);
routes.routes_Products(app);

app.listen(PORT);
console.log("App is listening to the port @ http://localhost/" + PORT);
