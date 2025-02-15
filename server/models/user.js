const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicUrl: { type: String },
  posts: { type: [String] },
  joinedChannels: { type: [String] },
});

const userModel = new model("user", userSchema);

module.exports = userModel;
