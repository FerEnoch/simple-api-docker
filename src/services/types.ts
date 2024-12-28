import { DeleteResult } from "mongoose";
import { UserData, UserDocumentType } from "../db/schemas/types";

export interface IUsersService {
    getAll: () => Promise<UserDocumentType[]>

    register: (data: UserData) => Promise<UserDocumentType>

    deleteAll: () => Promise<DeleteResult>
}