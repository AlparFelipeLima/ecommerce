import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'

export const usersRouter = Router()
const usersController = new UsersController()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', usersController.getUser)
usersRouter.patch('/:id', usersController.updateUser)
usersRouter.delete('/:id', usersController.deleteUser)