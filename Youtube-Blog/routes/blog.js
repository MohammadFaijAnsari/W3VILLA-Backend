const { Router, urlencoded } = require("express");
const multer = require("multer");
const express=require('express');
const app=express();
const path = require("path");
const Blog = require("../models/blog");
const comment = require("../models/comment");
const router = Router();
// Middleware
app.use(express(urlencoded({extended:false})));
app.use(express.json());
// ===== Multer Storage =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/uploads"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

// ====== Show All Blogs ======
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.render("blogs", { blogs, user: req.user || null });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching blogs");
  }
});

// ====== Show Form for New Blog ======
router.get("/add-new", (req, res) => {
  res.render("addblog", { user: req.user || null });
});

// ====== Show Single Blog by Id ======
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");

    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    const comments = await comment.find({ blogId: req.params.id })
      .populate("createdBy"); 
    res.render("blog", {
      user: req.user,
      blog,
      comments,  
    });
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).send("Server error");
  }
});


// ====== Save Blog to DB ======
router.post("/", upload.single("coverImage"), async (req, res) => {
  try {
    const { title, body } = req.body;
    const blog = await Blog.create({
      title,
      body,
      createdBy: req.user ? req.user._id : null,
      coverImageURL: req.file ? `/uploads/${req.file.filename}` : null,
    });
    return res.redirect(`/blog/${blog._id}`);
    // res.redirect('/');
  } catch (err) { }
});

// Comment Blog Route


router.post("/comment/:id", async (req, res) => {            
    await comment.create({
      content: req.body.comment,   
      createdBy: req.user._id,     
      blogId: req.params.id       
    });
    return res.redirect(`/blog/${req.params.id}`);
});



module.exports = router;
