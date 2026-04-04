const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema=new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});
module.exports=mongoose.model("Review",reviewSchema);


//har ek review ke sath ek auther ka hona jaroori h
//koi na koi user hoga jo already locked in hoga vahi user banega
//koi bhi review create krne se pehle vo user loggged in hona chahiye show
//.ejs m jo leave a review vala form h vo tabhi dikhayi den achahiye jab user 
//locked in ho 