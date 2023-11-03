import mongoose from "mongoose";

const BookingSchema=new mongoose.Schema({
bus:{
    type:mongoose.Schema.ObjectId,
    ref:'Bus',
    required:true,
},
user:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    required:true,
},
seats:{
    type:Array,
    required:true,
},
transactionId:{
    type:String,
    required:true,
}
})
const Booking=mongoose.model('Booking',BookingSchema);
export default Booking;