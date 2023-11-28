// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const itemAction = require("../actions/item.action");

// Create a new item
router.post("/items", itemAction.createItem);

// Get all items
router.get("/items", itemAction.getAllItems);

// Other CRUD routes can be added similarly

module.exports = router;
