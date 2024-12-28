import { UserModel } from '../db/schemas/user.schema';
import { UserData } from '../db/schemas/types';
import bcrypt from 'bcrypt';

export class UsersService {

  static async getAll() {
    return UserModel.find();
  }

  static async register(data: UserData) {
    const user = new UserModel<UserData>({
      email: data.email,
      password: await bcrypt.hash(data.password, 10)
    });

    return await user.save();
  }

  static async deleteAll() {
    return await UserModel.deleteMany({});
  }

}