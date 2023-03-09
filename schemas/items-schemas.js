const itemSchema = {
    type: 'object',
    properties: {
        //id: { type: 'string' },
        name: { type: 'string' }
    }
}

const getAllItemsSchema = {
    response: {
        200: {
            type: 'array',
            items: itemSchema
        }
    }
}

const getSingleItemSchema = {
    response: {
        200: itemSchema
    }
}

const addItemSchema = {
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
        201: itemSchema
    }
}

const deleteItemSchema = {
    response: {
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'}
            }
        }
    }
}

const updateItemSchema = {
    response: {
        200: itemSchema
    }
}

module.exports = {
    getAllItemsSchema,
    getSingleItemSchema,
    addItemSchema,
    deleteItemSchema,
    updateItemSchema
}
