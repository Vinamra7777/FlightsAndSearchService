const {AirportRepository} = require('../repository/index');

class AirportService {
    constructor(){
        this.AirportRepository=new AirportRepository();
    }
    async CreateAirport(data){
        try {
            const airport=await this.AirportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log(`Some error occured at Airport service layer`);
            throw{error};
        }
    }

    async deleteAirport(airportId){
        try {
            const response= await this.AirportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log(`Some error occured at Airport service layer`);
            throw{error};
        }
    }

    async updateAirport(airportId,data){
        try {
            console.log(data);
            const airport= await this.AirportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log(`Some error occured at Airport service layer`);
            throw{error};
        }
    }

    async getAirport(airportId){
        try {
            const airport= await this.AirportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log(`Some error occured at Airport service layer`);
            throw{error};
        }
    }

    async getAllAirports(filter){
        try {
            const airports= await this.AirportRepository.getAllAirports({name:filter.name, address:filter.address}); 
            return airports;
        } catch (error) {
            console.log(`Some error occured at Airport service layer`);
            throw{error};
        }
    }
}

module.exports=AirportService;