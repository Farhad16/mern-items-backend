const Item = require("../models/item.model");

// Create a new item
const createItem = async (req, res) => {
  try {
    const { name, created_by } = req.body;
    const newItem = new Item({ name, created_by });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error creating item:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find().populate("created_by", "name");
    res.status(200).json(items);
  } catch (error) {
    console.error("Error getting items:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Other CRUD operations can be added similarly

module.exports = { createItem, getAllItems };
