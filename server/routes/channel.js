const express = require("express");
const {
  getChannel,
  updateChannel,
  createChannel,
  deleteChannel,
} = require("../controllers/channel");

const router = express.Router();

router.get("/:id", getChannel);

router.patch("/:id", updateChannel);

router.post("/", createChannel);

router.delete("/:id", deleteChannel);

module.exports = router;
