import Booking from "../models/bookingsModel.js";
import Bus from '../models/busModel.js'

// book a seat
export const BookingController=async(req,res)=>{
    try {
        const Newbooking=new Booking({...req.body,transactionId:'12345',user:req.body.userId})
        await Newbooking.save();
        const bus=await Bus.findById(req.body.bus)
    
        bus.seatsBooked=[...bus.seatsBooked,...req.body.seats];
        await bus.save();
        return res.status(200).send({
            success:true,
            message:"booking created sucessfully",
            data:Newbooking,
        })
    } catch (error) {
        return res.status(400).send({
            success:false,
            message:error.message,
            data:null,
        })
    }
}