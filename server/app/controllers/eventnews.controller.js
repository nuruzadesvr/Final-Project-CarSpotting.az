const mongoose=require('mongoose')
const {EventNews}=require('../models/eventnews.model')


const eventnewsController={
    getAll:async(req,res)=>{
        const target=await EventNews.find()
        res.send(target)
    },
    getById:async (req,res)=>{
        const {id}=req.params
        const target=await EventNews.findById(id)
        res.send(target)
    },
    add: async (req,res)=>{
        const {filename}=req.body
        let newEventNews=new EventNews({
            image:req.file.filename,
            content:req.file.content,
            eventtime:req.file.eventtime,
            place:req.file.place
        })
        await newEventNews.save()
        res.send(newEventNews)
    },
    edit:async (req,res)=>{
        const {id}=req.params
        const updateEventNews=await eventnewsController.findByIdAndUpdate(iud, req.body);
        res.send(`${id}' li element has been updated`,updateEventNews)
    },
    delete:async(req,res)=>{
        const{id}=req.params
        await EventNews.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    }
}

module.exports={eventnewsController}