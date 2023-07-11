import express, { Request, Response } from 'express'
import { AuthenticateRequest } from '../../../common/types'
import { inject, injectable } from 'inversify'
import { Types } from '../../../../DiTypes'
import { IUService,UserService } from '../services/user.service'
import { SignUpValidationRequest } from './reqValidators'
import { IUserModel } from '../../../data/interfaces'
import { StatusCode } from '../../../common/constant/statusCode'
import getDecorators from "inversify-inject-decorators";
import { DIContainer } from '../../../inversify.config'



const { lazyInject } = getDecorators(DIContainer, false);

export interface IUController {
    signup : (req : Request, res: Response) => Promise<Response>
    signin : (req : Request, res: Response) => Promise<Response>
    logout : (req : AuthenticateRequest, res: Response) => Promise<Response>
}

@injectable()
export class UserController implements IUController {
    @inject(Types.USER_SERVICE) 
    private userService : IUService 

    // constructor(@inject(Types.USER_SERVICE) userService: IUService) {
    //     this.userService = userService;
    // }

    // public getContainer(){
    //     const userServicess = DIContainer.get<IUService>(Types.USER_SERVICE)
    //     console.log(userServicess)
    //     return userServicess
    // }
    
    public async signup (req : Request, res: Response) : Promise<Response> {
        let userDetails = req.body.userDetails as IUserModel;
        let validRes = SignUpValidationRequest(req.body)

        if(!validRes.valid){
            return res.status(404).json({
                title : validRes.errors[0].message,
                description : 'invalid request body'
            })
        }
        console.log(this.userService, "ok")

        try {
            const newUser = await this.userService.createUserAndGenerateAuthToken(
                userDetails.emailId, 
                userDetails.name, 
                userDetails.password
            )

            console.log(newUser, "ok user")
    
            return res.status(StatusCode.RESOURCE_CREATED)
                    .cookie('access_token', (await newUser).token)
                    .json({token : (await newUser).token})
        } catch (error) {
            res.status(StatusCode.SERVER_ERROR).json({
                title : error.message,
                description : 'internal server error'
            })
        }
    }

    public async signin(req : Request, res: Response): Promise<Response> {
        return
    }

    public async logout(req : AuthenticateRequest, res: Response): Promise<Response> {
        return
    }
}