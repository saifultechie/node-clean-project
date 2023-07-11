import { inject, injectable } from "inversify";
import { IPublicUser } from "../../../data/interfaces";
import { Types } from "../../../../DiTypes";
import { IUserRepository } from "../repository/user.repository";
import jwt from "jsonwebtoken";
import config from "../../../../config";
import { sha256Encription } from "../../../../utils/encription";


export interface IUService {
    createUserAndGenerateAuthToken
    (emailId : string, name : string, password : string) : Promise<IPublicUser>
    signInUser(emailId : string, password : string) : Promise<IPublicUser>
    clearAuthToken(userId : string) : Promise<void>
}

@injectable()
export class UserService implements IUService {
    @inject(Types.User_Repository) private userRepository : IUserRepository

    private generateFreshAuthToken(emailId : string) : string{

        let token = jwt.sign({emailId : emailId.toString()}, config.JWT,{
            expiresIn : Math.floor(Date.now()) + 1000 * 60 * 60 * 24 * 30 // 30 days
        })
        return token
    }
    
    public async createUserAndGenerateAuthToken (emailId : string, name : string, password : string) : Promise<IPublicUser> {
        let token = this.generateFreshAuthToken(emailId)
        let passWordEncrypt = sha256Encription(password)
        console.log("ok service")
        return await this.userRepository.createNewUser({
            emailId,
            password : passWordEncrypt,
            token,
            name
        })
    }
    signInUser(emailId : string, password : string) : Promise<IPublicUser> {
        return
    }
    clearAuthToken(userId : string) : Promise<void> {
        return
    }
}