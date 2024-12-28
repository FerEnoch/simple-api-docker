import { UserModel } from '../db/schemas/user.schema'
import { DeleteResult } from 'mongoose'
import { UserData, UserDocumentType } from '../db/schemas/types'

import bcrypt from 'bcrypt'
import { IUsersService } from './types'

export class UsersService implements IUsersService {
  async getAll (): Promise<UserDocumentType[]> {
    return await UserModel.find()
  }

  async register (data: UserData): Promise<UserDocumentType> {
    const user = new UserModel<UserData>({
      email: data.email,
      password: await bcrypt.hash(data.password, 10)
    })

    return await user.save()
  }

  async deleteAll (): Promise<DeleteResult> {
    return await UserModel.deleteMany({})
  }
}
