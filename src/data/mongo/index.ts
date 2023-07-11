import mongoose from "mongoose";
import { Projection, TodoAppDataSource } from "../interfaces";
import { injectable, unmanaged } from "inversify";
import { DB_TABLES } from "../../common/constant/dbtables";
import User from "./models/user.model";


const ALL_TABLES : {[key : string] : mongoose.Model<any>} = {
    [DB_TABLES.USER] : User
}

@injectable()
export class MongoDataSource<T> implements TodoAppDataSource<T> {

    private table : mongoose.Model<T>
    constructor(@unmanaged() tableName : DB_TABLES){
        this.table = ALL_TABLES[tableName] as mongoose.Model<T>
    }

    public async create<T>(data: T): Promise<T> {
        const newRecord = new this.table(data)
        return newRecord.save() as Promise<T>
    }

    public async findOne<T>(filter: Partial<T>, project?: Projection): Promise<T> {
        return this.table.findOne()
    }

    public async findMany<T>(filter: Partial<T>, project?: Projection): Promise<T[]> {
        return 
    }

    public async findOneAndUpdate<T>(filter: Partial<T>, updates: Partial<T>): Promise<T> {
        return
    }
}