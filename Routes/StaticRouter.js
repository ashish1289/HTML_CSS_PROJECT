const express = require("express");
const router = express.Router();
const OrderController = require("../Controller/orderController");
router.get("/", OrderController.renderView);
module.exports = router;
