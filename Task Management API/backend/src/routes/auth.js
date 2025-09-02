const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const verifyToken = require("../middleware/authMiddleware.js");

const router = express.Router();
const JWT_SECRET = "faij1234"; 

router.post("/register", async (req, res) => {
  try {
    const { name, email,role, password } = req.body;

    if (!name || !email || !role || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "⚠️ Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await User.create({
      name,
      email,
      role,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, 
      maxAge: 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "✅ User registered successfully",
      user: { id: newUser.id, name: newUser.name, email: newUser.email,role:newUser.role },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password"});

    const token = jwt.sign(
      { id: user.id, email: user.email , name:user.name,role:user.role},
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 60 * 60 * 1000,
    });
    let redirectUrl = "/";
    if (user.role === "Admin") {
      redirectUrl = "/dashboard"; // frontend route for admin
    }
    return res.json({
      message: "✅ Login successful",
      user: { id: user.id, name: user.name, email: user.email,role: user.role },
      redirect: redirectUrl, 
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Example Express Route
router.get("/me",verifyToken, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json({ user: req.user });
});

// LogOut
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
