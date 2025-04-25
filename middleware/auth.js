const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: req.t("NO_TOKEN") });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    req.t =
      req.user.preferredLanguage === "hi"
        ? require("../config/i18n").hi
        : require("../config/i18n").en;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err.message); 
    res.status(401).json({ message: req.t("INVALID_TOKEN") });
  } 
};
