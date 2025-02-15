const Post = require("../models/posts");

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  console.log(post);
  res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.body);
  console.log(post);
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  console.log(post);
  res.status(200).json({ status: "successul" });
};

const deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  console.log(post);
  res.status(200).json({ status: "successul" });
};

const getAllPosts = async (req, res) => {
  const post = await Post.find({});
  console.log(post);
  res.status(200).json(post);
};

module.exports = { getPost, updatePost, deletePost, createPost, getAllPosts };
