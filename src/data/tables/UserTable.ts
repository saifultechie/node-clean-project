import { injectable } from "inversify";
import { MongoDataSource } from "../mongo";
import { IUserModel } from "../interfaces";
import { DB_TABLES } from "../../common/constant/dbtables";

@injectable()
export class UserTable extends MongoDataSource<IUserModel>{
    constructor(){
        super(DB_TABLES.USER)
    }
}