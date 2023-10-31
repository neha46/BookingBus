import express from 'express';
import {BusController} from '../controller/busController.js';
import { GetAllBusesController } from '../controller/busController.js';
import { AuthMiddleware } from '../middleware/authMiddleware.js';
import { UpdateBusController} from '../controller/busController.js';
import { DeleteBusController } from '../controller/busController.js';
const router=express.Router();
// create and add bus
 router.post('/add-bus',BusController);
//  get all buses
router.post('/get-all-buses',AuthMiddleware,GetAllBusesController)
// updatebus
router.post('/update-bus',AuthMiddleware, UpdateBusController)
// delete bus
router.post('/delete-bus',AuthMiddleware, DeleteBusController)

 export default router;