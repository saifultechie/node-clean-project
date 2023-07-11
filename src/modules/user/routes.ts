import express from 'express'
import { DIContainer } from '../../inversify.config'
import { IUController } from './controllers/user.controller'
import { Types } from '../../../DiTypes'
import { UserUrl } from '../../common/constant/routes'

export function UserRoute(){
    const router = express.Router()

    const userController = DIContainer.get<IUController>(Types.User_Controller)

    router.post(UserUrl.signin, userController.signin)
    router.post(UserUrl.signup, userController.signup)
    router.put(UserUrl.logout, userController.logout)

    return router

}