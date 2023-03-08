const fastify = require('fastify')()
const mongoose = require('mongoose');

const routes = require('./routes/items-routes')
fastify.register(routes)

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/items', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}
connectToMongoDB()

const start = async () => {
    try {
        await fastify.listen({ port: 5000 })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()


{/*const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('@fastify/swagger-ui')
fastify.register(fastifySwagger)
fastify.register(fastifySwaggerUi, {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
          },
    }
})*/}