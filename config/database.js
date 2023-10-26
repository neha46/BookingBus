import mongoose from 'mongoose';


const mongoURI ="mongodb+srv://anisha:neha12@cluster0.wpwulto.mongodb.net/BusChale";

mongoose.connect(mongoURI)

const database= mongoose.connection;

database.on("connected",()=>{
    console.log("data base connected  successfully");
})
database.on("error",()=>{
    console.log("error while connecting database");
})

export default database;