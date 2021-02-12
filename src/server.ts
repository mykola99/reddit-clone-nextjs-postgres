import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entities/User";
import express from 'express';
import morgan from 'morgan'
import authRoutes from './routes/auth'

const app = express();

app.use(express.json());
app.use(morgan('dev'))


app.get('./',(req,res)=>console.log('hello world'))
app.use('/api/auth', authRoutes)

app.listen(5000, async()=>{
 console.log('server is running at http://localhost:5000.')
 try{
   await createConnection()
   console.log('Database connected')
 }catch(err){
  console.log(err)
 }
})