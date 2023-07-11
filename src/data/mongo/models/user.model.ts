import mongoose from "mongoose";
import { IUserModel } from "../../interfaces";
import { DB_TABLES } from "../../../common/constant/dbtables";

const userSchema = new mongoose.Schema<IUserModel>(
    {
      name: {
        type: String,
        required: true,
      },
      emailId: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      token: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

  const User = mongoose.model<IUserModel>(DB_TABLES.USER, userSchema);

export default User;