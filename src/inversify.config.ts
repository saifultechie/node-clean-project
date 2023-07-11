import { Container} from 'inversify'
import { ITodoController ,TodoController} from './modules/todo/controller/todo.controller'
import {Types} from '../DiTypes' 
import { ITodoService, TodoService } from './modules/todo/services/todo.service'
import { IUController, UserController } from './modules/user/controllers/user.controller'
import { IUService, UserService } from './modules/user/services/user.service'
import { IUserRepository, UserRepository } from './modules/user/repository/user.repository'
import { IUserModel, TodoAppDataSource } from './data/interfaces'
import { UserTable } from './data/tables/UserTable'

//

const DIContainer = new Container()

// db table bindings

DIContainer.bind<TodoAppDataSource<IUserModel>>(Types.USER_TABLE).to(UserTable)

// user services

DIContainer.bind<IUController>(Types.User_Controller).to(UserController)
DIContainer.bind<IUService>(Types.USER_SERVICE).to(UserService)
DIContainer.bind<IUserRepository>(Types.User_Repository).to(UserRepository)

// bind
DIContainer.bind<ITodoController>(Types.Todo_CONTROLLER).to(TodoController)
DIContainer.bind<ITodoService>(Types.Todo_SERVICE).to(TodoService)

export {DIContainer}