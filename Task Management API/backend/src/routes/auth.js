const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const router = express.Router();
const JWT_SECRET = "your_secret_key"; // ⚠️ ideally .env me rakho

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) 
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) 
      return res.status(400).json({ message: "⚠️ Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await User.create({ name, email, password: hashedPassword });
       
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "✅ User registered successfully",
       user: { id: newUser.id, name: newUser.name } });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
       return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" });

    return res.json({ message: "✅ Login successful", user: { id: user.id, name: user.name } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
