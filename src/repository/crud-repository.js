class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log(`Something went wrong with CRUD repository`);
            throw{error};
        }
    }

    async destroy(modelId){
        try {
            await this.model.destroy({
                where:{
                    id:modelId,
                }
            });
            return true;
        } catch (error) {
            console.log(`Something went wrong with CRUD repository`);
            throw{error};
        }
    }

    async update(modelId,data){
        try {
            const result=this.model.update(data,{
                where:{
                    id:modelId,
                }
            });
            return result;
        } catch (error) {
            console.log(`Something went wrong with CRUD repository`);
            throw{error};
        }
    }

    async get(modelId){
        try {
            const result=this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log(`Something went wrong with CRUD repository`);
            throw{error};
        }
    }

    async getAll(){
        try {
            const result=this.model.findByAll();
            return result;
        } catch (error) {
            console.log(`Something went wrong with CRUD repository`);
            throw{error};
        }
    }

}

module.exports=CrudRepository;


/*
let's say we have to make AirportRepository with this then we just have to do

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport) //sent Airport model after importing
    }
}
    And AirportRepository will be made and just export it to use anywhere
*/