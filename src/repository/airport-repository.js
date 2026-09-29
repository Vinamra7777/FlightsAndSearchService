const {Op} =require('sequelize');

const { Airport }=require('../models/index');

class AirportRepository{
    async createAirport(arr){
        try {
            const airport=await Airport.bulkCreate(arr);
            return airport;
        } catch (error) {
            console.log('Something went wrong at airport repository layer');
            throw{error};
        }
    }
    async deleteAirport(airportId){
        try {
            await Airport.destroy({
                where:{
                    id:airportId,
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong at airport repository layer');
            throw{error};
        }
    }

    async updateAirport(airportId,dataObj){
        try {
            const airport=await Airport.findByPk(airportId);
            airport.name=dataObj.name;
            airport.address=dataObj.address;
            airport.cityId=dataObj.cityId;
            await airport.save()
            return airport;
        } catch (error) {
            console.log('Something went wrong at airport repository layer');
            throw{error};
        }
    }

    async getAirport(airportId){
        try {
            const airport=await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log('Something went wrong at airport repository layer');
            throw{error};
        }
    }

    async getAllAirports(filter){
        try {
            if(filter.name && filter.address){
                const airports=await Airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name,
                        },
                        address:{
                            [Op.startsWith]:filter.address,
                        },
                    }
                });
                return airports;
            }
            if(filter.name){
                const airports=await Airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name,
                        },
                    }
                });
                return airports;
            }
            if(filter.address){
                const airports=await Airport.findAll({
                    where:{
                        address:{
                            [Op.startsWith]:filter.address,
                        },
                    }
                });
                return airports;
            }
            const airports=await Airport.findAll();
            return airports;
        } catch (error) {
            console.log('Something went wrong at airport repository layer');
            throw{error};
        }
    }
}

module.exports=AirportRepository;