import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from '../api/index.js'
import config from '../config/index.js'

export default (app) => {
  app.get('/status', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  app.enable('trust proxy')
  app.use(cors({
    origin: config.frontendUrl || 'http://localhost:5173',
    credentials: true,
  }))
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(config.api.prefix, routes())

  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status || 401).json({
        success: false,
        message: err.message,
      })
    }
    return next(err)
  })

  app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
      success: false,
      message: err.message,
      ...(config.nodeEnv === 'development' && { stack: err.stack }),
    })
  })
}
