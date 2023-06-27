const mongoose=require("mongoose")

const EventNews=mongoose.model(
    'EventNews',
    {
        content:String,
        image:String,
        eventtime:String,
        place:String
    },
    {
        timestamps: true,
    },
)

model.exports={EventNews}