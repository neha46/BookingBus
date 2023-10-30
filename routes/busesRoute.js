import express from 'express';
import BusController from '../controller/busController.js';

const router=express.Router();
 router.post('/add-bus',BusController);
 export default router;