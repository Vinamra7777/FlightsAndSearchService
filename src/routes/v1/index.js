const express=require('express');
const cityController=require('../../controllers/city-controller');
const airportController=require('../../controllers/airport-controller');
const flightController=require('../../controllers/flight-controller');

const {FlightMiddlewares}=require("../../middlewares/index"); 

const router=express.Router();

router.post("/cities",cityController.create); //for api/v1/cities
router.delete("/cities/:id",cityController.destroy);
router.get("/cities/:id",cityController.get);
router.get("/cities",cityController.getAll);
router.patch("/cities/:id",cityController.update);

router.post("/airports",airportController.create); //for api/v1/airports
router.delete("/airports/:id",airportController.destroy);
router.get("/airports/:id",airportController.get);
router.get("/airports",airportController.getAll);
router.patch("/airports/:id",airportController.update);

router.post("/flights",FlightMiddlewares.validateCreateFlight,flightController.create); //for api/v1/flights
router.get("/flights",flightController.getAll);
router.get("/flights/:id",flightController.get);
router.patch("/flights/:id",flightController.update);

module.exports=router;