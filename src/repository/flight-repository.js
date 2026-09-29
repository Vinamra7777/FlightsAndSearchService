const {Flight} = require('../models/index');

const { Op } = require('sequelize');

class FlightRepository{

    #createFilter(data){ //this is private function
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and]:[
                    {price:{[Op.gte]:data.minPrice}},
                    {price:{[Op.lte]:data.maxPrice}}
                ]
            }); // [Op.and] takes array of conditions which will run simultaneoulsy thus removing the problem of overwrite
        }
        else if(data.minPrice){
            Object.assign(filter,{price : {[Op.gte]:data.minPrice}}); //Object.assign makes new key-value, [Op.gte] is greater than or equal to operator
        }
        else if(data.maxPrice){
            Object.assign(filter,{price : {[Op.lte]:data.maxPrice}}); // in this case price key is reassigned by maxPrice thus only upper bound filter will be applied
        }
        // console.log(filter);

        return filter;
    }

    async createFlight(data){ 
        try {
            const flight= await Flight.create(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong at flight repository layer');
            throw{error};
        }
    }

    async getFlight(flightId){
        try {
            console.log(flightId);
            const flight= await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong at flight repository layer');
            throw{error};
        }
    }

    async getAllFlight(filter){
        try {
            const filterObject=this.#createFilter(filter);
            const flight=await Flight.findAll({
                where:filterObject,
            });
            return flight;
        } catch (error) {
            console.log('Something went wrong at flight repository layer');
            throw{error};
        }
    }

    async updateFlight(flightId,data){
        try {
            await Flight.update(data,{
                where:{
                    id:flightId,
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong at flight repository layer');
            throw{error};
        }
    }
}

module.exports=FlightRepository;


/*
where:{
    arrivalAirportId:2,
    departureAirportId:3,
    price:{[Op.gte]: 4000},
}
*/