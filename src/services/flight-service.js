const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository(); //did this cuz we needded to create object multiple times
        this.flightRepository=new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'Arrival time can not be less than departure time'};
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            }); //used spread operator to add totalSeats at end of data object that is we don't need to add totalSeats option while creating flight it will be added on it's own from airplaneId
            return flight;
        } catch (error) {
            console.log(`Some error occured at Flight service layer`);
            throw{error};
        }
    }

    async getAllFlightData(data){
        try {
            const flights=this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log(`Some error occured at Flight service layer`);
            throw{error};
        }
    }

    async getFlight(flightId){
        try {
            const flight=await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log(`Some error occured at Flight service layer`);
            throw{error};
        }
    }

    async updateFlight(flightId,data){
        try {
            const response=await this.flightRepository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log(`Some error occured at Flight service layer`);
            throw{error};
        }
    }
}


module.exports=FlightService;
/*

{
 flightNumber,
 airplaneId,
 departureAirportId,
 arrivalAirportId,
 arrivalTime,
 departureTime,
 price,
 totalSeats-->from airplaneId
}


*/