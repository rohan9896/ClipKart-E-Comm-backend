const mongoose = require("mongoose")
const productsData = require("./productsData")
const Product = require("../models/products-model")


function addProductsData() {
  for (let product of productsData) {
    let newProduct = new Product(product);
    newProduct.save();
  };
  console.log("data added sucessfully")
}

const deleteProductsData = () => {
  Product.deleteMany({}, function(err){
    if("err"){
      console.log(err);
    }else{
      console.log("Deleted Products")
    }
  })
}


module.exports = {addProductsData, deleteProductsData};