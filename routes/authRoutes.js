const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

// router.get('/fakeuser',async(req,res)=>{
//     const user=new User({username:'tushar',
//         email:'Tushara272@gmail.com'
//     });
//     const newUser=await User.register(user,'tushar12');
//     res.send(newUser);
// });


router.get('/register', (req, res) => {
    res.render('auth/signup.ejs');
});

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = new User({ username, email });

        await User.register(user, password);
        // res.send('User created successfully');
        req.flash('success', `Welcome ${username} , Please Login to continue`)
        res.redirect('/login');

    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }



});

router.get('/login', (req, res) => {
    res.render('auth/login')
});
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}),
    function (req, res) {
        const { username } = req.user;

        req.flash('success', `Welcome back ${username}!!`)
        res.redirect('/products');
    }
);
router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success','Logges out successfully');
    res.redirect('/login');
});

module.exports = router;

