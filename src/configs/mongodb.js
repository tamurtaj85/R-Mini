import mongoose from "mongoose";
import { DB_URL } from "../utils/constants.js";

await mongoose.connect(DB_URL);
await import("../models/index.js");
