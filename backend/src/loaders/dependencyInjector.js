import logger from './logger.js'

const container = new Map()

export default ({ models, services }) => {
  try {
    if (models) {
      models.forEach(({ name, model }) => {
        container.set(name, model)
        logger.debug(`Registered model: ${name}`)
      })
    }

    if (services) {
      services.forEach(({ name, service }) => {
        container.set(name, service)
        logger.debug(`Registered service: ${name}`)
      })
    }

    container.set('logger', logger)
    logger.info('Dependency injector loaded')
    return container
  } catch (error) {
    logger.error('Dependency injector error:', error)
    throw error
  }
}

export { container }
