const Channel = require("../models/channel");

const getChannel = async (req, res) => {
  const post = Channel.findById(req.params.id);
  console.log(post);
  res.status(200).json(post);
};

const updateChannel = async (req, res) => {
  const post = Channel.findByIdAndUpdate(req.body);
  console.log(post);
  res.status(200).json(post);
};

const createChannel = async (req, res) => {
  const post = Channel.create(req.body);
  console.log(post);
  res.status(200).json({ status: "successul" });
};

const deleteChannel = async (req, res) => {
  const post = Channel.findByIdAndDelete(req.params.id);
  console.log(post);
  res.status(200).json({ status: "successul" });
};

module.exports = { getChannel, updateChannel, createChannel, deleteChannel };
