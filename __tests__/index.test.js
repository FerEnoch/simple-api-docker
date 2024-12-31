import { request } from './setup'
import { suite, expect, it, test } from 'vitest'

// test('hello world!', () => {
//   expect(1 + 1).toBe(2)
// })

suite('Test user API', () => {
  it('GET /users endpoint should return a list of users', async () => {
    const res = await request.get('/users')
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it('GET /users/:name endpoint should return a user', async () => {
    const newUser = {
      name: 'Dolina',
      nickname: 'mdolina',
      email: 'mdolina@myhost.com',
      password: 'mdolina654'
    }

    await request.post('/users/register').send(newUser)

    const res = await request.get('/users/Dolina')
    expect(res.status).toBe(200)
    expect(res.body).toSatisfy((user) => user.name === 'Dolina')
  })

  it('POST /users/register endpoint should create a new user', async () => {
    const newUser = {
      name: 'Dolina',
      nickname: 'mdolina',
      email: 'mdolina@myhost.com',
      password: 'mdolina654'
    }

    const res = await request.post('/users/register').send(newUser)
    expect(res.status).toBe(201)
  })

  it('DELETE /users endpoint should clear database', async () => {
    const res = await request.delete('/users')
    expect(res.status).toBe(204)

    const res2 = await request.get('/users')
    expect(res2.body).toHaveLength(0)
  })
})

test('Register a user and retrieve all users', async () => {
  const newUser = {
    name: 'Dario Z',
    nickname: 'zdario',
    email: 'zdario@myhost.com',
    password: 'zdario123'
  }
  const res = await request.post('/users/register').send(newUser)
  expect(res.status).toBe(201)

  const res2 = await request.get('/users')
  expect(res2.body).toHaveLength(1)

  const [{ nickname }] = res2.body
  expect(nickname).toBe('zdario')
})
