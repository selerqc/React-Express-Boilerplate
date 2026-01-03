import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import User from '../models/user.model.js'
import logger from '../loaders/logger.js'

class AuthService {
  async register({ name, email, password }) {
    logger.debug('AuthService.register called for email: %s', email)

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      const error = new Error('User already exists with this email')
      error.status = 400
      throw error
    }

    const user = await User.create({ name, email, password })
    const token = this.generateToken(user)

    return { user: user.toJSON(), token }
  }

  async login({ email, password }) {
    logger.debug('AuthService.login called for email: %s', email)

    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      const error = new Error('Invalid email or password')
      error.status = 401
      throw error
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      const error = new Error('Invalid email or password')
      error.status = 401
      throw error
    }

    const token = this.generateToken(user)
    return { user: user.toJSON(), token }
  }

  async getCurrentUser(userId) {
    const user = await User.findById(userId)
    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }
    return { user: user.toJSON() }
  }

  generateToken(user) {
    return jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    )
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, config.jwt.secret)
    } catch (error) {
      const err = new Error('Invalid token')
      err.status = 401
      throw err
    }
  }
}

export default new AuthService()
