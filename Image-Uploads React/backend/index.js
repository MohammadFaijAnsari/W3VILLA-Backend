const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors()); // ✅ Allow requests from React (http://localhost:3000 by default)

// Storage config for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save inside uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage: storage });

// Upload Route
app.post("/uploads", upload.single("image"), (req, res) => {
  try {
    console.log("File uploaded:", req.file);

    res.json({
      success: true,
      message: "File uploaded successfully!",
      filePath: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ success: false, message: "Upload failed!" });
  }
});

// Serve uploaded files statically (optional for preview)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
