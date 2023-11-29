// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const itemAction = require("../actions/item.action");

// Create a new item
router.post("/create", itemAction.createItem);

// Get all items
router.get("/getItems", itemAction.getAllItems);

// Update an item
router.put("/update/:id", itemAction.updateItem);

// Delete an item
router.delete("/delete/:id", itemAction.deleteItem);

module.exports = router;
