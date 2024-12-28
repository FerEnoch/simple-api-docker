import { Document } from 'mongoose'

export interface UserDocumentType extends Document {
  email: string
  password: string
}

export interface UserData {
  email: string
  password: string
}
