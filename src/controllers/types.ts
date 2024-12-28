import { Request, Response } from 'express'

export interface IUserController {
  getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>
  register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>
  deleteAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>
}
