import logger from '../loaders/logger.js'

const userSubscribers = {
  onUserCreated: async (user) => {
    logger.info('📬 New user registered: %s', user.email)
  },

  onUserDeleted: async (user) => {
    logger.info('👋 User deleted: %s', user.email)
  },

  onPasswordReset: async (user) => {
    logger.info('🔐 Password reset requested for: %s', user.email)
  },
}

export default userSubscribers
