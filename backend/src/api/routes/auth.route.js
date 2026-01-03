import { Router } from 'express'
import authService from '../../services/auth.service.js'
import isAuth from '../middlewares/isAuth.js'
import config from '../../config/index.js'

const router = Router()


router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      const error = new Error('Name, email, and password are required')
      error.status = 400
      throw error
    }

    const result = await authService.register({ name, email, password })
    res.cookie('token', result.token, config.cookieOptions)
    res.status(201).json({ success: true, user: result.user })
  } catch (error) {
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      const error = new Error('Email and password are required')
      error.status = 400
      throw error
    }

    const result = await authService.login({ email, password })
    res.cookie('token', result.token, config.cookieOptions)
    res.json({ success: true, user: result.user })
  } catch (error) {
    next(error)
  }
})

router.post('/logout', (req, res) => {
  res.clearCookie('token', config.cookieOptions)
  res.json({ success: true, message: 'Logged out successfully' })
})

router.get('/me', isAuth, async (req, res, next) => {
  try {
    const result = await authService.getCurrentUser(req.user.id)
    res.json({ success: true, ...result })
  } catch (error) {
    next(error)
  }
})

export default router

