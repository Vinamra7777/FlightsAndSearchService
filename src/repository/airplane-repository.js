const {Airplane} = require('../models/index');

class AirplaneRepository{
    async getAirplane(airplaneId){
        try {
            const airplane=await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log('Something went wrong at airplane repository layer');
            throw{error};
        }
    }
}

module.exports=AirplaneRepository;