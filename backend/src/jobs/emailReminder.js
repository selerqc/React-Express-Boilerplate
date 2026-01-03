import logger from '../loaders/logger.js'

export default {
  name: 'email-reminder',

  async run(data) {
    logger.info('Running email reminder job with data:', data)
    return { processed: true }
  },

  getSchedule() {
    return '0 9 * * *'
  },
}
