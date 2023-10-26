
 import express from 'express';
 import LoginController from '../controller/loginController.js';

import UserController from '../controller/userController.js';

 const router=express.Router();
//create user
  router.post('/register',UserController);

  //login user
 router.post('/login',LoginController)

  export  default router;