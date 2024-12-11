const express = require("express");
const router = express.Router();
const OrderController = require("../Controller/orderController");

//create a new order
router.post("/Order", OrderController.makeOrder);

//get all orders
router.get("/findproduct/:id", OrderController.findProduct);

//get a single order by id
router.delete("/deleteOrder/:id", OrderController.deleteOrder);

//get the order to edit by id
router.get("/editOrder/:id", OrderController.editView);

//update an order by id
router.post("/updateorder/:id", OrderController.updateOrder);
module.exports = router;
