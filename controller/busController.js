
import Bus from "../models/busModel.js";
//for creaing bus
 export const BusController=async(req,res)=>{
   
try {
    const ExistingBus=await Bus.findOne({number:req.body.number})
    if(ExistingBus){
        return res.status(200).send({
            success:false,
            message:"bus already exits"
        })
    }
    // create bus
    const NewBus=new Bus(req.body);
    await NewBus.save();
    res.status(200).send({
        success:true,
        message:'Bus created SucessFully',
    })
} catch (error) {
    res.status(500).send({
        success:false,
        message:error.message 
    })
}
}

// get-all-buses
export const GetAllBusesController=async(req,res)=>{
       try {
        const BusExist=await Bus.find({})

        return res.status(200).send({
            success:true,
            data:BusExist,
            message:"Bus Fetched successfully"
        })
       } catch (error) {
        res.status(400).send({
            success:false,
            data:[],
            message:error.message,
        })
       }
}

// updatw-bus
export const UpdateBusController=async(req,res)=>{
    try {
        await Bus.findByIdAndUpdate(req.body._id,req.body,{new:true});
        res.status(200).send({
            message:"bus updated successfullu",
            success:true,
        
        })
    } catch (error) {
        res.status(400).send({
            message:error.message,
            success:false
        })
    }
}


