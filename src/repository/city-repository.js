const {Op}=require('sequelize');

const { City }=require('../models/index'); //could have imported simply from city.js but index exports all and we can import from there that is why

class CityRepository{
    async createCity(arr){ 
        try{
            const city=await City.bulkCreate(arr); //passing whole array of objects
            return city;
        }
        catch (err){
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }

    async deleteCity(cityId){ //directly sending cityId
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }
        catch (err){
            console.log('Something went wrong at city repository layer');
            throw{err}; //incase deleting city which doesn't exist
        }
    }

    async updateCity(cityId,dataObj){
        try {
            // const city= await City.update(dataObj,{
            //     where:{
            //         id:cityId
            //     }
            // }); 
            const city=await City.findByPk(cityId);
            city.name=dataObj.name;
            await city.save();
            return city; 
        } catch (err) {
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId); //findByPk special query by sequelize for primary key
            return city;
        } catch (err) {
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }

    async getAllCities(filter){ //filter can be empty too
        try {

            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await City.findAll(); 
            return cities;
        } catch (err) {
            console.log('Something went wrong at city repository layer');
            throw{err};
        }
    }
}

module.exports = CityRepository;