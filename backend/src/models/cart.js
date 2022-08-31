const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    name: { type:String},
    price: { type: Number },
    image: { type: String },
    size: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
