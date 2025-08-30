const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog");

const router = Router();

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
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.render("blog",
       {
        user: req.user,
         blog
       });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching blog");
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
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while creating blog");
  }
});

module.exports = router;
