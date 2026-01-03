import User from '../models/user.model.js'
import logger from '../loaders/logger.js'

class UserService {
  async getAll() {
    const users = await User.find()
    return users
  }

  async getById(userId) {
    const user = await User.findById(userId)
    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }
    return user
  }

  async update(userId, updateData) {
    logger.debug('UserService.update called for userId: %s', userId)
    delete updateData.password

    const user = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    )

    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }

    return user
  }

  async delete(userId) {
    logger.debug('UserService.delete called for userId: %s', userId)

    const user = await User.findByIdAndDelete(userId)
    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }

    return { message: 'User deleted successfully' }
  }
}

export default new UserService()
