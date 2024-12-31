import { beforeAll, afterEach, afterAll } from 'vitest'
import supertest from 'supertest'
import { Server } from 'node:http'
import { createApp } from '../src/app'
import * as db from './database'
import { UsersService } from '../src/services/users.service'
import TestAgent from 'supertest/lib/agent'

const userService = new UsersService()
const app = createApp(userService)

let server: Server
let request: TestAgent

beforeAll(async () => {
  await db.connect()
  server = app.listen(0)
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  request = supertest(app)
})

afterEach(async () => {
  await db.clearDatabase()
})

afterAll(async () => {
  await db.closeDatabase()
  server.close()
})

export { request }
