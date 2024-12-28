import express, { Application, json } from 'express'
import { createRouter } from './routers/index'
import { servicesTypes } from './types'
import morgan from 'morgan'

export function createApp(service: servicesTypes): Application {

  const app: Application = express()

  app.use(json())
  app.use(morgan('dev'))

  try {
    const usersRouter = createRouter(service)

    app.use('/users', usersRouter)

  } catch (error) {
    console.log("🚀 ~ createApp ~ error:", error)
  }

  return app
}

