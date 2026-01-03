import winston from 'winston'
import config from '../config/index.js'

const logger = winston.createLogger({
  level: config.logs.level,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'backend' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
})

if (config.nodeEnv === 'production') {
  logger.add(
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  )
  logger.add(
    new winston.transports.File({ filename: 'logs/combined.log' })
  )
}

export default logger
