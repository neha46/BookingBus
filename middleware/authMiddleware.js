import jwt from 'jsonwebtoken';
export const AuthMiddleware=(req,res,next)=>{
   try {
    const token= req.headers.authorization.split(" ")[1];
    if(!token){
        return res.send({
            sucess:false,
            message:"auth failed",

        })
    }
    const decode=jwt.verify(token,process.env.Secret_key)
 req.body.userId=decode.userId
 next();
   } catch (error) {
     return res.send({
        sucess:false,
        message:error.message,
        data:[]

    })
   }

}


