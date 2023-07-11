import { Response } from "express";
import { AuthenticateRequest } from "../../../common/types";
import { injectable , inject} from "inversify";
import { ITodoService } from "../services/todo.service";
import { Types } from "../../../../DiTypes";

export interface ITodoController {
    getAllTodos : (req : AuthenticateRequest, res : Response) => Promise<Response>;
    createNewTodo : (req : AuthenticateRequest, res : Response) => Promise<Response>;
    updateTodo : (req : AuthenticateRequest, res : Response) => Promise<Response>;
    deleteTodo : (req : AuthenticateRequest, res : Response) => Promise<Response>;
}

@injectable()
export class TodoController implements ITodoController {

    @inject(Types.Todo_SERVICE)
    private todoService : ITodoService
   
    public getAllTodos = async(req : AuthenticateRequest, res : Response): Promise<Response> =>{
        try {
            const todos = await this.todoService.getAllTodos("1")
            return res.status(200).json({ msg : todos})
        } catch (error) {
            res.status(500).json({
                title : "something went wrong"
            })
        }
    } 

    public createNewTodo = async(req : AuthenticateRequest, res : Response): Promise<Response> =>{
        try {
            return res.status(200).json({ msg : "create todos "})
        } catch (error) {
            res.status(500).json({
                title : "something went wrong"
            })
        }
    } 

    public updateTodo = async(req : AuthenticateRequest, res : Response): Promise<Response> =>{
        try {
            return res.status(200).json({ msg : "update todos "})
        } catch (error) {
            res.status(500).json({
                title : "something went wrong"
            })
        }
    } 

    public deleteTodo = async(req : AuthenticateRequest, res : Response): Promise<Response> =>{
        try {
            return res.status(200).json({ msg : "delete todos "})
        } catch (error) {
            res.status(500).json({
                title : "something went wrong"
            })
        }
    } 
} 