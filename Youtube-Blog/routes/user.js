const { Router } = require('express');
const router = Router();
const User = require('../models/user.js');

// -----------------------------
// Signup Page (GET)
router.get('/signup', (req, res) => {
  return res.render('signup');
});

// Signin Page (GET)
router.get('/signin', (req, res) => {
  return res.render('signin');
});
//Logout ClearCookie
router.get('/logout',(req,res)=>{
   res.clearCookie('token').redirect('/');
})
// Add Blog Page Route

// Create User (POST: Signup)
router.post('/signup', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Simple validation
    if (!fullname || !email || !password) {
      return res.render('signup', { error: "All fields are required" });
    }

    await User.create({ fullname, email, password });

    return res.redirect('/');
  } catch (err) {
    console.error("Signup Error:", err.message);
    
  }
});

// -----------------------------
// Existing User Signin (POST)
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).render('signin', { error: "Email and Password are required" });
    }

    const token = await User.matchPasswordAndGenerateToken(email, password);

    // ✅ Sirf ek hi final response
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 // 1 hour
    });

    return res.redirect('/'); // final response

  } catch (error) {
    console.error("Signin Error:", error.message);
    // ✅ Agar error aaya to bas yehi return hoga, aur kuch nahi
    return res.status(401).render('signin', { error: "Incorrect Email or Password" });
  }
});




module.exports = router;
