const mongoose=require('mongoose')
const {Home}=require('../models/home.model')


const homeController={
    getAll:async(req,res)=>{
        const target=await Home.find()
        res.send(target)
    },
    getById:async (req,res)=>{
        const {id}=req.params
        const target=await Home.findById(id)
        res.send(target)
    },
    add: async (req,res)=>{
        const {filename}=req.body
        let newHome=new Home({
            marka:req.file.marka,
            image:req.file.filename,
            model:req.file.model,
            content:req.file.content,
            about:req.file.about,
        })
        await newHome.save()
        res.send(newHome)
    },
    edit:async (req,res)=>{
        const {id}=req.params
        const updateHome=await homeController.findByIdAndUpdate(iud, req.body);
        res.send(`${id}' li element has been updated`,updateHome)
    },
    delete:async(req,res)=>{
        const{id}=req.params
        await Home.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    }
}

module.exports={homeController}