import express from 'express';
import {BusController, GetBusByIdController} from '../controller/busController.js';
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
// get-bus-by-id
router.post('/get-bus-by-id',AuthMiddleware, GetBusByIdController)

 export default router;