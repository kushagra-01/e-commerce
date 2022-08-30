const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  { 
    name: { type:String,required:true },
    image: { type: String },
    brand: { type: String },
    category: { type: String },
    type: { type: String },
    price: { type: Number },
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
