const User = require("../models/user");

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const user = await User.create(req.body);
  console.log(user);
  res.status(200).json({ status: "successful" });
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  console.log(user);
  res.status(200).json({ status: "successful" });
};

const updateUser = async (req, res) => {
  const user = User.findByIdAndUpdate(req.body);
  console.log(user);
  res.status(200).json(user);
};

module.exports = { getUserById, createUser, deleteUser, updateUser };
