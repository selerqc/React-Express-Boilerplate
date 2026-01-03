import mongoose from 'mongoose'
import config from '../config/index.js'
import logger from './logger.js'

export default async () => {
  try {
    const connection = await mongoose.connect(config.mongodbUri)
    logger.info(` MongoDB connected: ${connection.connection.host}`)
    return connection.connection.db
  } catch (error) {
    logger.error('MongoDB connection error:', error)
    throw error
  }
}
