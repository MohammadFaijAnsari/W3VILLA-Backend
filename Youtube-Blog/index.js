const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const userRoute = require('./routes/user.js');
const blogRoute = require('./routes/blog.js');   
const mongoose = require('./db.connect.js');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require("./middlewares/authentation.js");
const Blog = require('./models/blog.js');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')));
// EJS Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static('./public/'));
app.get('/',async (req, res) => { 
    const allBlog=await Blog.find({});
    res.render('home', {
        User: req.user || null,
        blogs: allBlog || null  
    });
});
app.use('/user', userRoute);
app.use('/blog', blogRoute);

app.listen(PORT, () => {
    console.log(`🚀 Server Started`);
});
