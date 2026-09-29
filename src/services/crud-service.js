class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const response=await this.repository.create(data);
            return response;
        } catch (error) {
            console.log(`Something went wrong at CRUD service layer`);
            throw{error};
        }
    }
    async destroy(id){
        try {
            await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log(`Something went wrong at CRUD service layer`);
            throw{error};
        }
    }
    async get(id){
        try {
            const response=await this.repository.get(id);
            return response;
        } catch (error) {
            console.log(`Something went wrong at CRUD service layer`);
            throw{error};
        }
    }
    async getAll(id){
        try {
            const response=await this.repository.getAll(id);
            return response;
        } catch (error) {
            console.log(`Something went wrong at CRUD service layer`);
            throw{error};
        }
    }
    async update(id,data){
        try {
            const response=await this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log(`Something went wrong at CRUD service layer`);
            throw{error};
        }
    }
}

module.exports=CrudService;

/*
let's say we have to make AirportService with this then we just have to do

class AirportService extends CrudSeervice{
    constructor(){
        const airportRepository=new AirportRepository();
        super(airportRepository);
    }
}
    And AirportService will be made and just export it to use anywhere
*/