const {Router}=require('express');
const router=Router();
const User=require('../models/user.js');

// SignUp Page Route Open
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
// Signin Page Route Open
router.get('/signin',(req,res)=>{
    return res.render('signin')
})

// Create the User URL SignUp Router

router.post('/signup',async (req,res)=>{
  const {fullname,email,password}=req.body;
  await User.create({
    fullname,email,password
  });
  return res.redirect('/');
})

// Existing User SignIn Router
router.post('/signin',async(req,res)=>{
  const {email,password}=req.body;
  console.log(email,"  ",password);
  User.matchPassword=await User.matchPassword(email,password);
  console.log("User",User);
  res.redirect('/');
});

module.exports=router;