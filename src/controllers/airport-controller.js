const {AirportService} = require('../services/index');

const airportService=new AirportService();

const create=async (req,res)=>{
    try {
        const airport= await airportService.CreateAirport(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:'Successfully created airport',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Airport controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to create airport',
            err:error,
        });
    }
}

const destroy=async (req,res)=>{
    try {
        const response=await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted airport',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Airport controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to delete airport',
            err:error,
        });
    }
}

const get=async (req,res)=>{
    try {
        const airport=await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data:airport,
            success:true,
            message:'Successfully fetched airport',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Airport controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to fetch airport',
            err:error,
        });
    }
}

const getAll=async (req,res)=>{
    try {
        const airports=await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data:airports,
            success:true,
            message:'Successfully fetched all airports',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Airport controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to fetch airports',
            err:error,
        });
    }
}

const update=async (req,res)=>{
    try {
        const airport=await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data:airport,
            success:true,
            message:'Successfully updated airport',
            err:{}
        });
    } catch (error) {
        console.log(`Something went wrong with Airport controller layer`);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to update airport',
            err:error,
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    getAll,
    update
}