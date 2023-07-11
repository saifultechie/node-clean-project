import { Request } from "express";
import { IUserModel } from "../data/interfaces";


export interface AuthenticateRequest extends Request {
    user : IUserModel | null | undefined
}