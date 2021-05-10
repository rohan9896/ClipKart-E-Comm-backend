const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: String,
  name: String,
  description: String,
  price: Number,
  inStock: Boolean,
  quantity: {
    type: Number,
    default: 1
  },
  wishlisted: {
    type: Boolean,
    default: false
  },
  newProd: Boolean,
  img: String,
  category: String,
  rating: Number,
  popularity: Number
})

module.exports = mongoose.model("Product", productSchema)