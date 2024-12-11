const mongoose = require("mongoose");
const product_Schema = new mongoose.Schema({
  ProdName: {
    type: String,
    require: true,
  },
  ProdRate: {
    type: String,
    require: true,
  },
  ProdQty: {
    type: Number,
    require: true,
  },
});
const Product_Model = mongoose.model("Product", product_Schema);
module.exports = Product_Model;
