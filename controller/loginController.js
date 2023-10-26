import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';
//for login
 export const LoginController=async(req,res)=>{
try {
    const{email,password}=req.body;
    const userExist= await User.findOne({email:email});
    if(!userExist){
        return res.status(400).json({
            success:false,
            message:"user does not exits",
            data:[],
        })
    }

    const matchPassword = await bcrypt.compare(password, userExist?.password);
   
    
    if(!matchPassword){
        return res.status(400).json({
            message:"password does not match",
            data:null,
            success:false,
        })
    }
    // authentication function se token generate hokr return hoga
    const token=jwt.sign({userId:userExist?._id},process.env.Secret_key,{expiresIn:"5d"})

    res.send({
        success: true,
        message: "user logged in successfully",
        data: token,
    })
}
  catch (error) {
            res.send({
                success:false,
                message:"error while logging",
                data:[],
                error:error.message
            })
        }
    }

// get-userby-id
 export const GetUserByIdController=async(req,res)=>{
    try {
        const user= await User.findById(req.body.userId);
        res.send({
            success:true,
            messgae:"user fetched sucessfuly",
            data:user
        })

    } catch (error) {
        res.send({
            success:false,
            messgae:"error while fetching user",
            data:[]
        }) 
    }
}


