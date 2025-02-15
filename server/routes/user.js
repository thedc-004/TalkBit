const express = require("express");
const router = express.Router();
const {
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/user");

router.get("/:id", getUserById);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
