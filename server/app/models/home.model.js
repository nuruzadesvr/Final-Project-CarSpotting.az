const mongoose =require("mongoose")

const Home=mongoose.model(
    'Home',
    new mongoose.Schema(
        {
          marka:String,
          model:String,
          content:String,
          image:String 
        },
        {
            timestamps: true,
        },
    )
)

model.exports= {Home}