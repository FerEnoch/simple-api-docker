import { UserModel } from '../db/schemas/user.schema'
import { DeleteResult } from 'mongoose'
import { UserData, UserDocumentType } from '../db/schemas/types'

import bcrypt from 'bcrypt'
import { IUsersService } from './types'

export class UsersService implements IUsersService {
  async getAll (): Promise<UserDocumentType[]> {
    return await UserModel.find()
  }

  async getUserByName (name: string): Promise<UserDocumentType | null> {
    return await UserModel.findOne({
      name
    })
  }

  async register (data: UserData): Promise<UserDocumentType> {
    const {
      name,
      nickname,
      email,
      password
    } = data
    const user = new UserModel<UserData>({
      name,
      nickname,
      email,
      password: await bcrypt.hash(password, 10)
    })

    return await user.save()
  }

  async deleteAll (): Promise<DeleteResult> {
    return await UserModel.deleteMany({})
  }
}
