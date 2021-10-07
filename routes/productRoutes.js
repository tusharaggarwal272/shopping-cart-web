const express=require('express');
const Product = require('../models/product');
const router=express.Router();
const Review=require('../models/review');
const {isLoggedIn}=require('../middleware');
// const product=require('../models/product');

//To get all the products
router.get('/products',async (req,res)=>{
    const products=await Product.find({});
    res.render('index',{products});
})

//Get the form for a new product:

router.get('/product/new',isLoggedIn,(req,res)=>{
     res.render('products/new');
});

router.post('/products',isLoggedIn,async(req,res)=>{
    const newProduct=req.body;
    await Product.create(newProduct);
    req.flash('success','Product created successfully');
    res.redirect('/products');  
});

//show a particular product
router.get('/products/:id',async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id).populate('reviews');
    // console.log(product);
    res.render('products/show',{product}); 
});
router.get('/products/:id/edit',isLoggedIn,async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    res.render('products/edit',{product});
});
//updating a particular product with the given id:

router.patch('/products/:id',isLoggedIn,async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndUpdate(id,req.body);
    req.flash('sucess','Updated your product successfully!')
    res.redirect(`/products/${id}`);
});

router.delete('/products/:id',isLoggedIn,async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
});
router.post('/products/:id/review',isLoggedIn,async(req,res)=>{
   
    const {id}=req.params;
    const {rating,comment}=req.body;

    const review=new Review({rating:rating,comment:comment,user:req.user.username});
    const product=await Product.findById(id);
    product.reviews.push(review);

    await review.save();
    await product.save();
    

    req.flash('success','Thankyou! for your feedback. It is very valuable to us');

    res.redirect(`/products/${id}`);
});

//delete a prodcut
router.delete('/products/:productid/review/:reviewid',isLoggedIn,async(req,res)=>{
    const {productid,reviewid}=req.params;
    await Product.findByIdAndUpdate(productid,{$pull:{reviews:reviewid}});
    await Review.findByIdAndDelete(reviewid);
    res.redirect(`/products/${productid}`);
    // console.log(req.params);

    // res.send("DELETE"); 
});

module.exports=router;