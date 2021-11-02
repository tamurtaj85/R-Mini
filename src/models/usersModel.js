// Importing all the neccesary modules and
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

// Creating the concerend schema
const usersSchema = Schema({
  fullName: String,
  email: String,
  password: String,
  pin: String,
  verified: Boolean,
  userRole: { type: Schema.Types.ObjectId, ref: "Roles" },
});

usersSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hashedPassword = bcrypt.hashSync(this.password, 10);
  this.password = hashedPassword;
  next();
});

usersSchema.method("checkPassword", function (password) {
  const passwordHash = this.password;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
});

// Compiling our schema into a mongoose model
export const User = mongoose.model("User", usersSchema);
