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

// updata an item
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, created_by } = req.body;

    const existingItem = await Item.findById(id);
    if (!existingItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (existingItem.created_by.toString() !== created_by) {
      return res
        .status(403)
        .json({ message: "Unauthorized: You cannot update this item" });
    }

    existingItem.name = name;
    const updatedItem = await existingItem.save();
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// delete an item
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { created_by } = req.body;

    const itemToDelete = await Item.findOne({ _id: id });

    if (!itemToDelete) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (itemToDelete.created_by !== created_by) {
      return res
        .status(401)
        .json({ message: "Unauthorized: You cannot delete this item" });
    }

    await Item.deleteOne({ _id: id, created_by });

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createItem, getAllItems, updateItem, deleteItem };
