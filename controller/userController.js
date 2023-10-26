
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'; 

// register user
const UserController=async(req,res)=>{
    const{name,email,password}=req.body;
    try {
// check user exits or not
        const existingUser= await User.findOne({email:email})
        if(existingUser){
            return( res.status(400).json({
                message:"user alreday exists",
                success:false,
                data:[],
            }))
        }
      const hashedPassword= await bcrypt.hash(password,10);
      req.body.password= hashedPassword;

    //   create new user
    const newUser=  await User.create({name:name,email:email,password:hashedPassword})
    res.send({
        message:"user created successfully",
        data:newUser,
        success:true
    })
    } catch (error) {
        res.send({
            message:error.message,
            data:[],
            success:false,
    })
}}



export default UserController;