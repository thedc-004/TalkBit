const { model, Schema } = require("mongoose");

const channelSchema = new Schema({
  creatorId: { type: String, required: true },
  chennelId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  bannerPicUrl: { type: String },
  description: { type: String },
  joinedUser: { type: [String] },
  createdAt: { type: Date, default: Date.now },
});

const channelModel = new model("channel", channelSchema);

module.exports = channelModel;
