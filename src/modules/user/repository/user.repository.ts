import { inject, injectable } from "inversify";
import { IPublicUser, IUserModel, TodoAppDataSource } from "../../../data/interfaces";
import { Types } from "../../../../DiTypes";


export interface IUserRepository {
    createNewUser(userDetails : Omit<IUserModel, '_id'>) : Promise<IPublicUser>
    getUserByEmail(emailId : string): Promise<IPublicUser>
    updateExistingUserDetails(userId : string,  updates: Partial<IUserModel>): Promise<IPublicUser>
}

@injectable()
export class UserRepository implements IUserRepository{

    @inject(Types.USER_TABLE)
    private userTable : TodoAppDataSource<IUserModel>

    private getUserPublic(userInfo : IUserModel) : IPublicUser{
        return {
            _id : userInfo._id,
            name : userInfo.name,
            emailId : userInfo.emailId,
            token : userInfo.token
        }
    }

    public async createNewUser(userDetails : Omit<IUserModel, '_id'>) : Promise<IPublicUser> {
        try {
            const newUserDetails = await this.userTable.create(userDetails as IUserModel)
            let userD = this.getUserPublic(newUserDetails)
            return userD
        } catch (error) {
            throw new Error('Unable to create user')
        } 
    }
    public async getUserByEmail(emailId : string): Promise<IPublicUser> {
        return
    }
    public async updateExistingUserDetails(userId : string,  updates: Partial<IUserModel>): Promise<IPublicUser> {
        return
    }
}