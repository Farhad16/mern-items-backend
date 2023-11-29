// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const itemAction = require("../actions/item.action");

// Create a new item
router.post("/create", itemAction.createItem);

// Get all items
router.get("/getItems", itemAction.getAllItems);

// Update a item
router.put("/update/:id", itemAction.updateItem);

module.exports = router;
