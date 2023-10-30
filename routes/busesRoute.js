import express from 'express';
import {BusController} from '../controller/busController.js';
import { GetAllBusesController } from '../controller/busController.js';
import { AuthMiddleware } from '../middleware/authMiddleware.js';

const router=express.Router();
// create and add bus
 router.post('/add-bus',BusController);
//  get all buses
router.post('/get-all-buses',AuthMiddleware,GetAllBusesController)
 export default router;