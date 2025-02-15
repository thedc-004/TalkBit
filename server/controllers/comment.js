const Comment = require("../models/comment");

const getComment = async (req, res) => {
  const post = Comment.findById(req.params.id);
  console.log(post);
  res.status(200).json(post);
};

const updateComment = async (req, res) => {
  const post = Comment.findByIdAndUpdate(req.body);
  console.log(post);
  res.status(200).json(post);
};

const createComment = async (req, res) => {
  const post = Comment.create(req.body);
  console.log(post);
  res.status(200).json({ status: "successul" });
};

const deleteComment = async (req, res) => {
  const post = Comment.findByIdAndDelete(req.params.id);
  console.log(post);
  res.status(200).json({ status: "successul" });
};

module.exports = {
  getComment,
  updateComment,
  deleteComment,
  createComment,
};
