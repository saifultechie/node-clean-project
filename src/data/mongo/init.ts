import mongoose from "mongoose";
import config from "../../../config";

mongoose.set('strictQuery', false)
mongoose.connect(config.CONNECTION_URL)