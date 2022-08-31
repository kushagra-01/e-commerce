const express = require("express");

const router = express.Router();

const product_model = require("../models/product.model");
const cart_model = require("../models/cart");
const review = require("../models/review.model");


// getting all cart items
router.get("/cart", async (req, res) => {
  try {
    const food = await cart_model.find().lean().exec();

    return res.send(food);
  } catch (err) {
    return res.send(err.message);
  }
});

// creating product
router.post("", async (req, res) => {
  try {
    const product_ = await product_model.create(req.body);
    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

//api to get all product_
router.get("", async (req, res) => {
  try {
    const product_ = await product_model.find().lean().exec();

    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

// getting product by id
router.get("/:id", async (req, res) => {
  try {
    const product_ = await product_model.findById(req.params.id);

    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

// creating cart
router.post("/cart", async (req, res) => {
  try {
    const product_ = await cart_model.create(req.body);
    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

//deleting product or cart

router.delete("cart/:id", async (req, res) => {
  try {
    const data = await cart_model.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});
router.delete("product/:id", async (req, res) => {
  try {
    const data = await product_model.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

// updating product
router.patch("product/:id", async (req, res) => {
  try {
    const data = await product_model.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

// creating review
router.post("/review", async (req, res) => {
  try {
    const product_ = await review.create(req.body);
    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

// deleting review
router.delete("review/:id", async (req, res) => {
  try {
    const data = await review.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(data);
  } catch (err) {
    return res.send(err.message);
  }
});

// getting review by product_id

router.get("review/:id", async (req, res) => {
  try {
    const product_ = await review.findById(req.params.id);

    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});


// getting all review
router.get("/review", async (req, res) => {
  try {
    const food = await review.find().lean().exec();

    return res.send(food);
  } catch (err) {
    return res.send(err.message);
  }
});


module.exports = router;
