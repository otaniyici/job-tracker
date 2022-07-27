import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExits = await user.findOne({ email });
  if (userAlreadyExits) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("updateUser user");
};

export { register, login, updateUser };
