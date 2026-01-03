import { Router } from 'express'
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'

export default () => {
  const router = Router()
  router.use('/auth', authRoutes)
  router.use('/users', userRoutes)
  return router
}
