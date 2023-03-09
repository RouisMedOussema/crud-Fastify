const { getAllItems, getSingleItem, addItem, deleteItem, updateItem} = require('../controllers/items-controllers')
const {getAllItemsSchema, getSingleItemSchema, addItemSchema, deleteItemSchema, updateItemSchema} = require('../schemas/items-schemas')

// Options to get all items
const getItemsOpts = {
    method: "GET",
    url: "/items",
    schema: getAllItemsSchema,
    handler: getAllItems
}

// Options to get single item
const getItemOpts = {
    method: "GET",
    url: "/items/:_id",
    schema: getSingleItemSchema,
    handler: getSingleItem
}

// Options to add item
const addItemOpts = {
    method: "POST",
    url: "/items",
    schema: addItemSchema,
    handler: addItem
}

// Options to delete item
const deleteItemOpts = {
    method: "DELETE",
    url: "/items/:_id",
    schema: deleteItemSchema,
    handler: deleteItem
}

// Options to update item
const updateItemOpts = {
    method: "PUT",
    url: "/items/:_id",
    schema: updateItemSchema,
    handler: updateItem
}

const itemRoutes = (fastify, options, done) => {
    fastify.route(getItemsOpts)
    fastify.route(getItemOpts)
    fastify.route(addItemOpts)
    fastify.route(deleteItemOpts)
    fastify.route(updateItemOpts)

    done()
}

module.exports = itemRoutes