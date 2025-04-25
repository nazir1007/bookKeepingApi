const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, role, preferredLanguage } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      preferredLanguage,
    });
    res.status(201).json({ message: req.t("REGISTER_SUCCESS") });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: req.t("UNAUTHORIZED") });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: req.t("LOGIN_SUCCESS"), token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
