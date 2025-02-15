const { model, Schema } = require("mongoose");

const commentSchema = new Schema({
  commentId: { type: String, required: true, unique: true },
  commentText: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  userId: { type: String, required: true },
});

const commentModel = new model("comments", commentSchema);

module.exports = commentModel;
