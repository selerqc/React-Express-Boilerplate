import User from '../../models/user.model.js'

const attachCurrentUser = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      const error = new Error('User not authenticated')
      error.status = 401
      throw error
    }

    const user = await User.findById(req.user.id)
    if (!user) {
      const error = new Error('User not found')
      error.status = 404
      throw error
    }

    req.currentUser = user
    next()
  } catch (error) {
    next(error)
  }
}

export default attachCurrentUser
