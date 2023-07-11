import server from "./server"
import config from "../config"
import TodoRoutes from "./modules/todo/routes"
import { TodoUrl ,UserUrl} from "./common/constant/routes" 
import { UserRoute } from "./modules/user/routes"
import "reflect-metadata";

(async () =>{

    // todo routes

    const todoRoutes = TodoRoutes()
    const userRoutes = UserRoute()

    server.use(TodoUrl.root, todoRoutes)
    server.use(UserUrl.root, userRoutes)

    server.get('/api/v1/home-page', (req, res)=>{
        res.status(200).json({ msg : "home page " })
    })
    server.listen(config.PORT,()=>{
        console.log(`server running with port ${config.PORT}`)
    })
})()