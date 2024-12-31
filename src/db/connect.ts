import mongoose from 'mongoose'
import {
  MONGO_USER, MONGO_PASS, MONGO_HOST,
  MONGO_PORT,
  MONGO_DB
} from '../config'

export const connectToDB = async (): Promise<void> => {
  const dbUrl = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`
  try {
    await mongoose.connect(dbUrl)
    console.log('🚀 ~ Connected to MongoDB users database')
  } catch (error) {
    console.log('🚀 ~ connectToDB ~ error:', error)
  }
}
