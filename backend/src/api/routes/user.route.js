import { Router } from 'express'
import userService from '../../services/user.service.js'
import isAuth from '../middlewares/isAuth.js'
import attachCurrentUser from '../middlewares/attachCurrentUser.js'

const router = Router()

router.get('/', isAuth, async (req, res, next) => {
  try {
    const users = await userService.getAll()
    res.json({ success: true, users })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', isAuth, async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id)
    res.json({ success: true, user })
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAuth, attachCurrentUser, async (req, res, next) => {
  try {
    if (req.currentUser._id.toString() !== req.params.id && req.currentUser.role !== 'admin') {
      const error = new Error('Not authorized to update this user')
      error.status = 403
      throw error
    }

    const user = await userService.update(req.params.id, req.body)
    res.json({ success: true, user })
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAuth, attachCurrentUser, async (req, res, next) => {
  try {
    if (req.currentUser.role !== 'admin') {
      const error = new Error('Admin access required')
      error.status = 403
      throw error
    }

    const result = await userService.delete(req.params.id)
    res.json({ success: true, ...result })
  } catch (error) {
    next(error)
  }
})

export default router
