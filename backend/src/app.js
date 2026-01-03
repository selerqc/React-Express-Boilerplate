import express from 'express'
import config from './config/index.js'
import loaders from './loaders/index.js'
import logger from './loaders/logger.js'

async function startServer() {
  const app = express()
  await loaders(app)

  app.listen(config.port, () => {
    logger.info(`
     Server started on port ${config.port}
     Environment: ${config.nodeEnv}
     API: http://localhost:${config.port}${config.api.prefix}
     Health: http://localhost:${config.port}/status
    `)
  })
}

startServer().catch((error) => {
  logger.error('Failed to start server:', error)
  process.exit(1)
})
