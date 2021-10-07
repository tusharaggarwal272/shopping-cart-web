const mongoose=require('mongoose');
const Product=require('./models/product.js');
const products=[
    {
        name:"Iphone",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price:200,
        desc:"This article is about the line of smartphones by Apple. For the original iPhone, see iPhone (1st generation). For other different types of iPhones and other uses, see iPhone (disambiguation)."

    },
    {
        name:"Apple Watch",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price:200,
        desc:"This article is about the line of smartphones by Apple. For the original iPhone, see iPhone (1st generation). For other different types of iPhones and other uses, see iPhone (disambiguation)."

    },
    {
        name:"Sports shoes",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price:300,
        desc:"This article is about the line of smartphones by Apple. For the original iPhone, see iPhone (1st generation). For other different types of iPhones and other uses, see iPhone (disambiguation)."

    },
    {
        name:"Drones",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price:90,
        desc:"This article is about the line of smartphones by Apple. For the original iPhone, see iPhone (1st generation). For other different types of iPhones and other uses, see iPhone (disambiguation)."

    },
    {
        name:"camera",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price:90,
        desc:"This article is about the line of smartphones by Apple. For the original iPhone, see iPhone (1st generation). For other different types of iPhones and other uses, see iPhone (disambiguation)."

    },
    {
        name:"Watches",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price:58,
        desc:"This article is about the line of smartphones by Apple. For the original iPhone, see iPhone (1st generation). For other different types of iPhones and other uses, see iPhone (disambiguation)."

    },
    
   
]

const seedDB=async()=>{
    await Product.insertMany(products);

    console.log("DB Seeded");
}

module.exports=seedDB;