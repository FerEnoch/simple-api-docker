import mongoose, { Schema } from 'mongoose'
import { UserDocumentType } from './types'

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
    { timestamps: true }
)

export const UserModel = mongoose.model<UserDocumentType>('UserModel', UserSchema)
