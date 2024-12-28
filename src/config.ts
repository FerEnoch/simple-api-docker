import { config } from 'dotenv'
config()

const {
  PORT = 3000,
  MONGO_USER = '',
  MONGO_PASS = '',
  MONGO_HOST = '',
  MONGO_PORT = '',
  MONGO_DB = ''
} = process.env

export {
  PORT,
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB
}
