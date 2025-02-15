const express = require("express");
const {
  getPost,
  updatePost,
  createPost,
  deletePost,
  getAllPosts,
} = require("../controllers/post");

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getPost);

router.patch("/:id", updatePost);

router.post("/", createPost);

router.delete("/:id", deletePost);

module.exports = router;
