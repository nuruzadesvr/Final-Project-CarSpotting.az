const Shop=require("mongoose")

const Shop=mongoose.model(
    'Shop',
  
    new mongoose.Schema(
        {
            title:String,
            type:String,
            price:Number,
            about:String,
            image:String
        },
        {
            timestamps: true,
        },
    )
)