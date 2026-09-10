const {ClientErrorsCodes} = require('../utils/error-codes');

const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ){
        res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data:{},
            successs:false,
            message: "Invalid reqest body for creation of flight",
            err: "Missing mandatory properties for creation",
        });
    }
    next();
}

module.exports={
    validateCreateFlight,
}