if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const seedDB=require('./seed');
const methodOverride=require('method-override');
const session=require('express-session');
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user');





mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log("DB not connected");
    console.log(err);
});

// seedDB();

//Routes
const productRoutes=require('./routes/productRoutes');
const authRoutes=require('./routes/authRoutes');
const cartRoutes=require('./routes/cartRoutes');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));




const sessionConfig={
    secret:'weneedsomebettersecret',
    resave:false,
    saveUninitialized:true,
    
}
app.use(session(sessionConfig));
app.use(flash());








//initialising the passport and sessions for storing the user info:
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser=req.user;
    next();
});



app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.get('/',(req,res)=>{
    res.render("home");
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("the server is running at port 3000");
})