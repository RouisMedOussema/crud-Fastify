const { getItems, getItem, addItem } = require('../controllers/items-controllers')

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems
}

// Options for single item
const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

// Options to add item
const addItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: {
                    type: 'string',
                }
            }
        },
        response: {
            201: Item
        }
    },
    handler: addItem
}

const itemRoutes = (fastify, options, done) => {

    fastify.get('/items', getItemsOpts)
    fastify.get('/items/:id', getItemOpts)
    fastify.post('/items', addItemOpts)

    done()
}

module.exports = itemRoutes