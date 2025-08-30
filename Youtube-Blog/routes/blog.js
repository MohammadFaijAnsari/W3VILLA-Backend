const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/blog');   
const router = Router();

// ===== Multer Storage =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('./public/uploads'));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});
const upload = multer({ storage: storage });

// Show form for new blog
router.get('/add-new', (req, res) => {
  return res.render('addblog', {
    user: req.user || null
  });
});

// Show Record fro the According Id
router.get('/:id',async (req,res)=>{
  const blog=await Blog.findById(req.params.id);
  
});
// Save blog to DB
router.post('/', upload.single('coverImage'), async (req, res) => {
  try {
    const { title, body } = req.body;
    const blog = await Blog.create({
      title,
      body,
      createdBy: req.user ? req.user._id : null,
      coverImageURL: req.file ? `/uploads/${req.file.filename}` : null
    });
    res.redirect(`/blog/${blog._id}`);
  } catch (error) { }
});



module.exports = router;
