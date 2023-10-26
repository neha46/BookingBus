
 import express from 'express';
 import {LoginController} from '../controller/loginController.js';

import UserController from '../controller/userController.js';
import { GetUserByIdController } from '../controller/loginController.js';
import { AuthMiddleware } from '../middleware/authMiddleware.js';


 const router=express.Router();
//create user
  router.post('/register',UserController);

  //login user
 router.post('/login',LoginController)

//  getuser by id
router.post('/get-user-by-id',AuthMiddleware,GetUserByIdController)

  export  default router;

