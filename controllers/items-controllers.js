//const { v4: uuidv4 } = require('uuid')
const Item = require('../collections/item-schema')
const mongoose = require('mongoose')

const getAllItems = async (req, reply) => {
    try {
        const items = await Item.find()
        reply.send(items)
    } catch (error) {
        reply.status(500).json({ error: error.message })
    }
}
const getSingleItem = async (req, reply) => {
    const { _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        reply.code(404).send({ msg: `No item with _id: ${_id}` });
        return;
    }
    try {
        const item = await Item.findById(_id)
        reply.send(item)
    } catch (error) {
        reply.status(500).json({ error: error.message })
    }
}
const addItem = async (req, reply) => {
    try {
        const newItem = new Item(req.body)
        await newItem.save()
        reply.send(newItem);
    } catch (error) {
        reply.status(500).json({ error: error.message })
    }
}
const deleteItem = async (req, reply) => {
    const { _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        reply.code(404).send({ msg: `No item with _id: ${_id}` });
        return;
    }
    try {
        await Item.findByIdAndDelete(_id);
        reply.send({ msg: `Item ${_id} deleted` });
    } catch (error) {
        reply.status(500).json({ error: error.message })
    }
}
const updateItem = async (req, reply) => {
    const { _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        reply.code(404).send({ msg: `No item with _id: ${_id}` });
        return;
    }
    try {
        await Item.findByIdAndUpdate(_id, req.body)
        reply.send({ msg: `Item ${_id} updated ` })
    } catch (error) {
        reply.status(500).json({ error: error.message })
    }
}

module.exports = { getAllItems, getSingleItem, addItem, deleteItem, updateItem }