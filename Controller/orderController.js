const Order_Model = require("../Models/Order.js");
const Product_Model = require("../Models/Product.js");
exports.renderView = async (req, res) => {
  const product = await Product_Model.find();
  const order = await Order_Model.find();
  console.log(product);
  return res.render("index", { product: product, orders: order });
};
exports.editView = async (req, res) => {
  const id = req.params.id;
  const order = await Order_Model.findById(id);
  console.log(order);
  const product = await Product_Model.find();
  return res.render("edit", { product: product, order: order });
};
exports.makeOrder = async (req, res) => {
  // console.log(req.body.ProdId);
  const product = await Product_Model.findById(req.body.ProdId);
  console.log(product);
  const order = await Order_Model.create({
    orderDate: Date.now(),
    prodId: product,
    prodRate: req.body.ProdRate,
    orderQty: req.body.OrderQty,
    orderValue: req.body.OrderValue,
  });
  if (order) {
    return res.redirect("/");
  } else {
    return res.redirect("/");
  }
};
exports.findProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product_Model.findById(id);
  return res.json(product);
};
exports.deleteOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order_Model.findByIdAndDelete(id);
  return res.redirect("/");
};
exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order_Model.findByIdAndUpdate(id, {
    orderQty: req.body.orderQty,
    orderValue: req.body.orderValue,
  });
  return res.redirect("/");
};
