const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');

const flightService=new FlightService();

const create=async (req,res)=>{
    try {
        let flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime, 
            price:req.body.price,
        }
         const flight=await flightService.createFlight(flightRequestData);
         return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:'Successfully created flight',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Flight controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to create flight',
            err:error,
        });
    }
}


const get= async(req,res)=>{
    try {
         const flight=await flightService.getFlight(req.params.id);
         return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:'Successfully fetched the flight',
            err:{}
         });
    } catch (error) {
        console.log(`Something went wrong with Flight controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to fetch flights',
            err:error,
        });
    }
}

const getAll=async(req,res)=>{
    try {
         const response=await flightService.getAllFlightData(req.query);
         return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'Successfully fetched flights',
            err:{}
         });
    } catch (error) {
        console.log(`Something went wrong with Flight controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to fetch flights',
            err:error,
        });
    }
}

const update=async (req,res)=>{
    try {
         const response=await flightService.updateFlight(req.params.id,req.body);
         return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:'Successfully updated the flights',
            err:{}
         });
    } catch (error) {
        console.log(`Something went wrong with Flight controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to update flights',
            err:error,
        });
    }
}

module.exports={
    create,
    getAll,
    get,
    update,
}