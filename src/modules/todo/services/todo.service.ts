import { ItodoModel } from "../../../data/interfaces";
import { injectable , inject} from "inversify";


export interface ITodoService {
    getAllTodos : (userId : string) => Promise<Array<ItodoModel>>
    createNewTodo : (todoTitle : string, userId : string) => Promise<ItodoModel>
    updateTodo : (userId : string, todoId : string, content: string) => Promise<ItodoModel>
    deleteTodo : (userId : string, todoId : string) => Promise<ItodoModel>
}


@injectable()
export class TodoService implements ITodoService {
   public getAllTodos = async(userId : string) : Promise<Array<ItodoModel>> => {
        try {
            return 
        } catch (error) {
            
        }
   }

   public createNewTodo = async(todoTitle : string, userId : string) : Promise<ItodoModel> => {
    try {
        return 
    } catch (error) {
        
    }
   }

   public updateTodo = async(userId : string, todoId : string, content: string) : Promise<ItodoModel> => {
    try {
        return 
    } catch (error) {
        
    }
   }

   public deleteTodo = async(userId : string, todoId : string) : Promise<ItodoModel> => {
    try {
        return 
    } catch (error) {
        
    }
   }

}