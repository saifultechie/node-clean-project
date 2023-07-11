import express from 'express'
import { DIContainer } from '../../inversify.config'
import { ITodoController } from './controller/todo.controller'
import { Types } from '../../../DiTypes'

export default function TodoRoutes(){
    const router = express.Router()
    const todoController = DIContainer.get<ITodoController>(Types.Todo_CONTROLLER)

    router.route('/')
        .get(todoController.getAllTodos)
        .post(todoController.createNewTodo)
        .patch(todoController.updateTodo)
        .delete(todoController.deleteTodo)

    return router

}