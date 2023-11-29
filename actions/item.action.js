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

const updateItem = async (req, res) => {
  console.log("res", res);
  console.log("req", req);
  try {
    const { id } = req.params;
    const { name, created_by } = req.body;

    // Check if the item exists
    const existingItem = await Item.findById(id);
    if (!existingItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Check if the user attempting to update the item is the creator
    if (existingItem.created_by.toString() !== created_by) {
      return res
        .status(403)
        .json({ error: "You do not have permission to update this item" });
    }

    // Update the item
    existingItem.name = name;
    const updatedItem = await existingItem.save();
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createItem, getAllItems, updateItem };
