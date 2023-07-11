import express from 'express'
import './data/mongo/init'
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }));
import "reflect-metadata";


export default server