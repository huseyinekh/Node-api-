const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const MovieSchema= new Schema({
    director_id:Schema.Types.ObjectId,
    title:{
       type: String,
        Required:true
    },
    imdb:Number,
    category:String,
    year:Number,
    country:String,
    CreatedAt:{
      type:Date,
      default:Date.now()
    }
})

module.exports=mongoose.model("movie",MovieSchema)