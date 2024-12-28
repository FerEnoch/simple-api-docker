import { Document } from 'mongoose'

export interface UserDocumentType extends Document {
  name: string
  nickname: string
  email: string
  password: string
}

export interface UserData {
  name: string
  nickname: string
  email: string
  password: string
}
