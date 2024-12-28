import mongoose, { Schema } from 'mongoose'
import { UserDocumentType } from './types'

const UserSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
},
{ timestamps: true }
)

export const UserModel = mongoose.model<UserDocumentType>('UserModel', UserSchema)
