import Bus from "../models/busModel.js";
const BusController=async(req,res)=>{
    console.log("res is:"+res)
    console.log("Bus model is :"+Bus)
try {
    const ExistingBus=await Bus.findOne({number:req.body.number})
    if(ExistingBus){
        return res.status(200).send({
            sucess:false,
            message:"bus already exits"
        })
    }
    const NewBus=new Bus(req.body);
    await NewBus.save();
    res.status(200).send({
        success:true,
        message:'Bus created SucessFully',
    })
} catch (error) {
    res.status(500).send({
        sucess:false,
        message:error.message 
    })
}
}
export default BusController;
