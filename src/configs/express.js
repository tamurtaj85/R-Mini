import express from "express";
import bodyParser from "body-parser";
import { PORT } from "../utils/constants.js";
import { routes_Products } from "../routes/productRoutes.js";

const app = express();

// Adding middleware upfront for every end point to parse the incomming request body to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Applying routes to app
await routes_Products(app);

app.listen(PORT);
