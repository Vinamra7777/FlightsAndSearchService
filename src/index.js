const express = require('express');
const bodyParser=require('body-parser');

// const { City }=require('./models/index'); --> Not doing this cuz we should maintain different folder for logic and functions
// const CityRepository=require('./repository/city-repository')

const {PORT, SYNC_DB}=require('./config/serverConfig'); //we directly didn't do this cuz index.js is main loading page and we don't want to populate it with all .env config
const ApiRoutes=require('./routes/index');

const db=require('./models/index');   

const setupAndStartServer=async ()=> {
    
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server Started at port ${PORT}`);
        if(SYNC_DB){
            db.sequelize.sync({alter:true}); 
        }

        // db.sequelize.sync({alter:true});
        // const city=await db.City.findOne({
        //     where:{
        //         id:9
        //     }
        // });
        //earlier below line didn't work because we hadn't synchronized anything
        // const airports=await city.getAirports();
        // console.log(city, airports);



        // console.log(City);
        // const repoObj=new CityRepository();
        // repoObj.createCity({name: "New Delhi"}); --> if we want to change name to cityName then we have to destructure it with same name there
        // repoObj.deleteCity(1)



        // const airports=await Airport.findAll(); --> gives all airports
        // const airports=await Airport.findAll({
        //     include: [{
        //         model:City
        //     }],
        // });

        // console.log(airports);
        // const airports=await City.findAll({
        //     where:{
        //         id:9,
        //     },
        //     include:[
        //         {
        //             model:Airport,
        //         }
        //     ]
        // });
        // const airports=await city.getAirport();
        // console.log(airports);
    });
}

setupAndStartServer();