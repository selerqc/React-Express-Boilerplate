import authService from '../../services/auth.service.js'

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token

    if (!token) {
      const error = new Error('No token provided')
      error.status = 401
      throw error
    }

    const decoded = authService.verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    error.name = 'UnauthorizedError'
    next(error)
  }
}

export default isAuth

