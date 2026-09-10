const {CityService}=require('../services/index');

const cityService=new CityService();

const create=async (req,res)=>{
    // Method-> Post and content-> req.body
    try {
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created city',
            err:{}
        });
    } catch (error) {
        console.log('Some error in controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to create city',
            err:error
        });
    }
}
const destroy=async (req,res)=>{
    // Method-> DELETE and url-> /city/:id
    try {
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted the city',
            err:{}
        });
    } catch (error) {
        console.log('Some error in controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to delete the city',
            err:error
        });
    }
}
const get=async (req,res)=>{
    //Method-> GET and url-> /city/:id
    try {
        const city=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Successfully fetched city',
            err:{}
        });
    } catch (error) {
        console.log('Some error in controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to get city',
            err:error
        });
    }
}
const getAll=async(req,res)=>{
    try {
        const cities=await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'Successfully fetched all cities',
            err:{}
        });
    } catch (error) {
        console.log('Some error in controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to get cities',
            err:error
        });
    }
}
const update=async (req,res)=>{
    //Method-> PATCH and url-> /city/:id and content-> req.body
    try {
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:'Successfully updated city',
            err:{}
        });
    } catch (error) {
        console.log('Some error in controller');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Failed to update city',
            err:error
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    getAll,
    update,
}