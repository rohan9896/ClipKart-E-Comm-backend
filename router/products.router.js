const express = require("express");
const router = express.Router();
const Product = require("../models/products-model")


router.route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json({success: true, products})
    }
    catch(err) {
      res.status(500).json({success: false, message: "unable to fetch data from db"})
    }
  })


module.exports = router;