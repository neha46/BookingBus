import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connect from './config/database.js'
import userRoutes from './routes/userRoutes.js';
import busesRoutes from './routes/busesRoute.js'
 const app= express();
 app.use(cors());
dotenv.config();
const port=process.env.port||5000;
app.use(express.json())
 app.use('/api/users',userRoutes);
 app.use('/api/buses',busesRoutes)
 app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    
 })