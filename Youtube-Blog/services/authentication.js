const JWT = require("jsonwebtoken");
const secret = "supermanfaij"; // 👉 isko .env file me rakho

// 🔹 Create Token
function createtoken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };

  const token = JWT.sign(payload, secret, { expiresIn: "1h" });
  return token;
}

// 🔹 Validate Token
function Validatetoken(token) {
  try {
    const decoded = JWT.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error("Invalid Token");
  }
}

module.exports = {
  createtoken,
  Validatetoken,
};
