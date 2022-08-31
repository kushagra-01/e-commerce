const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  { 
    id:{ type: String,required:true},
    name: { type:String,required:true },
    image: { type: String },
    brand: { type: String },
    category: { type: String },
    type: { type: String },
    price: { type: Number },
    cDate: { type: Date,required:true },
    uDate: { type: Date ,required:true},
    description: { type: String },
    rating: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
