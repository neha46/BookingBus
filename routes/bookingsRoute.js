import express from 'express';
import { BookingController } from '../controller/bookingController.js';
import { AuthMiddleware } from '../middleware/authMiddleware.js';

const router=express.Router();

// book a seat
router.post('/book-seat',AuthMiddleware,BookingController);

export default router;