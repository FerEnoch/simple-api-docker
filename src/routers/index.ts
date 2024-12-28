import { Router } from 'express'
import { servicesTypes } from '../types'
import { UserController } from '../controllers/users.controller'

export function createRouter (service: servicesTypes): Router {
  const router = Router()

  try {
    const userController = new UserController(service)

    router.get('/', userController.getAll.bind(userController) as any)
    router.post('/', userController.register.bind(userController) as any)
    router.delete('/', userController.deleteAll.bind(userController) as any)
  } catch (error) {
    console.log('🚀 ~ createRouter ~ error:', error)
  }

  return router
}
