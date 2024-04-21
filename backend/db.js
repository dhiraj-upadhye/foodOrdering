import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 1,
    maxLength: 30,
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const User = mongoose.model("User", userSchema);

export { User };
