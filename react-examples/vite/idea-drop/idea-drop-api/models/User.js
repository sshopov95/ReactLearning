import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
      trim: true,
    },
    email: {
      type: String,
      requred: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      requred: true,
      minlenght: 6,
    },
  },
  { timestamps: true },
);

//Hash passwords before saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return ;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema, "Users");

export default User;
