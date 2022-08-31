const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  { 
    userid:{ type: String,required:true},
    description: { type:String,required:true },
    id: { type: String },
    cDate: { type: Date,required:true },
    uDate: { type: Date ,required:true},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const review = mongoose.model("review", reviewSchema);

module.exports = review;
