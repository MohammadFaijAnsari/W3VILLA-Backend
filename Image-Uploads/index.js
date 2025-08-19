const express = require('express');
const PORT = 8000;
const path = require('path');
const app = express();
const multer = require('multer');

// Middleware
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({ extended: false }));

// Redirect the View/homepage.ejs (SSR)
app.get('/', (req, res) => {
    res.render("homepage")
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');   
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage: storage });

app.post('/uploads', upload.single('profileImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    // return res.end("Image Uploads Successfully");
    return res.redirect('/');
})

app.listen(PORT, (req, res) => {
    console.log("Server Started", PORT);
})