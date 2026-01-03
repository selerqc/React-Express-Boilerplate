import expressLoader from './express.js'
import mongooseLoader from './mongoose.js'
import dependencyInjector from './dependencyInjector.js'
import logger from './logger.js'
import User from '../models/user.model.js'
import AuthService from '../services/auth.service.js'
import UserService from '../services/user.service.js'

export default async (app) => {
  try {
    await mongooseLoader()
    logger.info('MongoDB loaded')
  } catch (error) {
    logger.warn('  MongoDB connection failed, running without database')
  }

  dependencyInjector({
    models: [
      { name: 'userModel', model: User },
    ],
    services: [
      { name: 'authService', service: AuthService },
      { name: 'userService', service: UserService },
    ],
  })
  logger.info(' Dependency injector loaded')

  expressLoader(app)
  logger.info(' Express loaded')

  logger.info(' All loaders completed') 
}
