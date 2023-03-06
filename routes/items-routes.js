const { getItems, getItem, addItem, deleteItem, updateItem} = require('../controllers/items-controllers')
const {getItemsSchema, getItemSchema, addItemSchema, deleteItemSchema, updateItemSchema} = require('../schemas/items-schemas')

// Options to get all items
const getItemsOpts = {
    method: "GET",
    url: "/items",
    schema: getItemsSchema,
    handler: getItems
}

// Options to single item
const getItemOpts = {
    method: "GET",
    url: "/items/:id",
    schema: getItemSchema,
    handler: getItem
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
    url: "/items/:id",
    schema: deleteItemSchema,
    handler: deleteItem
}

// Options to update item
const updateItemOpts = {
    method: "PUT",
    url: "/items/:id",
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