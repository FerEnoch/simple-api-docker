
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongod: MongoMemoryServer

export const connect = async (): Promise<void> => {
  mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  await mongoose.connect(uri)

  console.log('Connected to in-memory database')
}

export const closeDatabase = async (): Promise<void> => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongod.stop()

  console.log('Disconnected from in-memory database')
}

export const clearDatabase = async (): Promise<void> => {
  const collections = mongoose.connection.collections

  await Promise.all(
    Object.keys(collections).map(async (key) => {
      const collection = collections[key]
      await collection.deleteMany({})
    })
  )

  console.log('Cleared database')
}
