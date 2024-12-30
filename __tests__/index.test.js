// import request from 'supertest'
// import mongoose from 'mongoose'
// import { MongoMemoryServer } from 'mongodb-memory-server-core'
// import app from '../index.js'
import { suite, expect, it, test, beforeAll, afterAll } from 'vitest'

test('hello world!', () => {
  expect(1 + 1).toBe(2)
})

// let mongoServer

// beforeAll(async () => {
//   mongoServer = await MongoMemoryServer.create()
//   const uri = mongoServer.getUri()
//   await mongoose.connect(uri, { dbName: 'animals' })
// })

// afterAll(async () => {
//   await mongoose.disconnect()
//   await mongoServer.stop()
// })

// suite('GET /', () => {
//   it('should return all animals', async () => {
//     const res = await request(app)
//       .get('/')
//     expect(res.status).toBe(200)
//     // expect(res.body).toBeInstanceOf(JSON)
//   })
// })

// // suite('GET /crear', () => {
// //   it('should create a new animal', async () => {
// //     const res = await request(app).get('/crear')
// //     expect(res.status).toBe(201)
// //   })
// // })

// // suite('GET /borrar-todos', () => {
// //   it('should delete all animals of type pig', async () => {
// //     await request(app).get('/crear')
// //     const res = await request(app).get('/borrar-todos')
// //     expect(res.status).toBe(204)
// //   })
// // })
