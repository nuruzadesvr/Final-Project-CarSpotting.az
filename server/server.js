const express = require("express")
const app=express()
const cors=require("cors")
const mongoose= require("mongoose")
const shopRoute=require('./app/routes/shop.route')
const homeRoute=require('./app/routes/home.route')
const userRoute=require('./app/routes/user.route')
const eventnewsRoute=require('./app/routes/eventnews.route')
const path = require('path')
const uploadPath=path.join(__dirname,'public')
app.use('/public',express.static(uploadPath))

app.use(cors())
app.use(express.json())

//DB CONNECTION
mongoose.connect("mongodb+srv://7f7pvmx:salam123salam@cluster0.dhgcukn.mongodb.net/").then(()=>{
    console.log("db connected");
})

app.use('/shop',shopRoute)
app.use('/home',homeRoute)
app.use('/user',userRoute)
app.use('/eventnews',eventnewsRoute)

app.listen(8080,()=>{
    console.log("server running")
})