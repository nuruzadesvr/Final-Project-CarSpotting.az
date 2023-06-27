const mongoose =require ("mongoose")

const db_url = process.env.URL.replace('<password>', process.env.PASSWORD)

mongoose.connect(db_url).then(() => {
    console.log("db connected");
})