const mongoose = require("mongoose");
const Order_Schema = new mongoose.Schema({
  orderDate: {
    type: String,
    require: true,
  },
  prodId: {
    type: Object,
    require: true,
  },
  prodRate: {
    type: Number,
    require: true,
  },
  orderQty: {
    type: Number,
    require: true,
  },
  orderValue: {
    type: Number,
    require: true,
  },
});
const Order_Model = mongoose.model("order", Order_Schema);
module.exports = Order_Model;
