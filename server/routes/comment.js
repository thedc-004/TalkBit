const express = require("express");
const {
  getComment,
  updateComment,
  createComment,
  deleteComment,
} = require("../controllers/comment");
const router = express.Router();

router.get("/:id", getComment);

router.patch("/:id", updateComment);

router.post("/", createComment);

router.delete("/:id", deleteComment);

module.exports = router;
