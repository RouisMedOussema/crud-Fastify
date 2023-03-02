const fastify = require('fastify')({ logger: true })
const PORT = 5000
const routes = require('./routes/items-routes')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('@fastify/swagger-ui')

fastify.register(routes)
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
})
const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()