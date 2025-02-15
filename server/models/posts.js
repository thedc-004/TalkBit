const { model, Schema } = require("mongoose");

const mediaSchema = new Schema({
  mediaId: {
    type: String,
    required: true,
    unique: true,
  },
  mediaUrl: {
    type: String,
    required: true,
    unique: true,
  },
  mimeType: {
    type: String,
    required: true,
  },
});

const contentSchema = new Schema({
  header: { type: String, required: true },
  body: { type: String, unique: true },
  media: { type: [mediaSchema] },
});

const postSchema = new Schema({
  postId: { type: String, required: true, unique: true },
  channelId: { type: String, required: true },
  content: { type: contentSchema, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  votes: { type: [{ upVote: Number, downVote: Number }] },
  comments: { type: [String] },
});

const postModel = new model("post", postSchema);

module.exports = postModel;
